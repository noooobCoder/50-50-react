import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../pages/MovieAppPage/styles.module.css";

const MovieItems = ({ src, title, score, overview, color, loading }) => {
  const handleImageError = (e) => {
    e.target.src = "http://iph.href.lu/300x450?text=啊偶，图片不见了";
  };

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  // const isImage = () => {
  //   return new Promise((resolve) => {
  //     const image = new Image();
  //     image.src = src;
  //     image.onload = () => {
  //       resolve(true);
  //     };
  //     image.onerror = () => {
  //       resolve(false);
  //     };
  //   });
  // };

  // isImage(src).then((result) => {
  //   if (result) {
  //     console.log("Valid image");
  //   } else {
  //     console.log(`Invalid image \n ${src}`);
  //   }
  // });

  return (
    <div className={styles.movie}>
      {loading ? (
        <Skeleton
          className={`${styles.image} ${styles.animatedBg}`}
          baseColor="#373b69"
          highlightColor="#444"
        />
      ) : (
        <LazyLoadImage
          className={`${styles.image} ${loaded ? "" : styles.animatedBg}`}
          src={src}
          alt={title}
          effect="blur"
          placeholderSrc="https://via.placeholder.com/300x450" // 替换为一个小的占位符图片
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
      <div className={styles.movieInfo}>
        {loading ? (
          <>
            <Skeleton
              className={`${styles.animatedBg} ${styles.animatedText}`}
              count={1}
              height={40}
              width={200}
              baseColor="#22254b"
              highlightColor="#444"
            />
            <Skeleton
              className={`${color} ${styles.span} ${styles.animatedBg} ${styles.animatedText}`}
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
        {loading ? (
          <Skeleton
            count={3}
            className={`${styles.animatedBg} ${styles.animatedText}`}
          />
        ) : (
          overview
        )}
      </div>
    </div>
  );
};

export default MovieItems;
