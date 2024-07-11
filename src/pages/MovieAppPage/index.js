import styles from "./styles.module.css";
import React, { useState, useEffect, useRef } from "react";
import MovieItems from "../../components/MovieItems";
import { Grid } from "react-virtualized";

const MovieAppPage = () => {
  const API_KEY = "37153a486788dafbb90b90b4ed4ae4a1";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=${API_KEY}`;
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dimensions, setDimensions] = useState({
    columnCount: 3,
    columnWidth: 400,
    rowHeight: 1000,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [loading, setLoading] = useState(true);

  const gridRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const columnWidth = 400; // Adjust based on your design
      const columnCount = Math.floor(window.innerWidth / columnWidth);
      const rowHeight = 580; // Adjust based on your design
      setDimensions({
        columnCount,
        columnWidth,
        rowHeight, // Adjust based on your design
        width: window.innerWidth,
        height: window.innerHeight - 77,
      });
      if (gridRef.current) {
        gridRef.current.recomputeGridSize();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getMovies(API_URL);
  }, [API_URL]);

  const getMovies = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results);
    await setMovies(data.results);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else {
      window.location.reload();
    }
  };

  const getClassByRate = (vote) => {
    if (vote >= 7.5) {
      return styles.good;
    } else if (vote >= 5) {
      return styles.average;
    } else {
      return styles.bad;
    }
  };

  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    const movieIndex = rowIndex * dimensions.columnCount + columnIndex;
    if (movieIndex >= movies.length) return null;
    const movie = movies[movieIndex];

    return (
      <div
        key={key}
        style={{ ...style, display: "flex", justifyContent: "center" }}
      >
        {loading ? (
          <MovieItems loading={loading} />
        ) : (
          <MovieItems
            src={IMG_PATH + movie.poster_path}
            title={movie.title}
            score={movie.vote_average}
            overview={movie.overview}
            color={getClassByRate(movie.vote_average)}
            loading={loading}
          />
        )}
      </div>
    );
  };

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <form className={styles.form} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.search}
          />
        </form>
      </header>
      <main className={styles.main}>
        <Grid
          className={styles.grid}
          ref={gridRef}
          cellRenderer={cellRenderer}
          columnCount={dimensions.columnCount}
          columnWidth={dimensions.columnWidth}
          height={dimensions.height}
          rowCount={Math.ceil(movies.length / dimensions.columnCount)}
          rowHeight={dimensions.rowHeight}
          width={dimensions.width}
        />
      </main>
    </div>
  );
};

export default MovieAppPage;
