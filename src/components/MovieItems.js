import React from "react";
import styles from "../styles/MovieAppPage.module.css";

const MovieItems = ({ src, title, score, overview, color }) => {
  return (
    <div className={styles.movie}>
      <img className={styles.image} src={src} alt="" />
      <div className={styles.movieInfo}>
        <h3 className={styles.title}>{title}</h3>
        <span className={`${color} ${styles.span}`}>{score}</span>
      </div>
      <div className={styles.overview}>
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default MovieItems;
