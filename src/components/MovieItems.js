import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../styles/MovieAppPage.module.css";

const MovieItems = ({ src, title, score, overview, color, loading }) => {
  return (
    <div className={styles.movie}>
      {loading ? (
        <Skeleton
          className={styles.image}
          baseColor="#373b69"
          highlightColor="#444"
        />
      ) : (
        <LazyLoadImage
          className={styles.image}
          src={src}
          alt={title}
          effect="blur"
          placeholderSrc="https://via.placeholder.com/300x450" // 替换为一个小的占位符图片
        />
      )}
      <div className={styles.movieInfo}>
        {loading ? (
          <>
            <Skeleton
              count={1}
              height={40}
              width={200}
              baseColor="#22254b"
              highlightColor="#444"
            />
            <Skeleton
              className={`${color} ${styles.span}`}
              height={25}
              width={50}
            />
          </>
        ) : (
          <>
            <h3 className={styles.title}>{title}</h3>
            <span className={`${color} ${styles.span}`}>{score}</span>
          </>
        )}
      </div>
      <div className={styles.overview}>
        <h3>Overview</h3>
        {loading ? <Skeleton count={3} /> : overview}
      </div>
    </div>
  );
};

export default MovieItems;
