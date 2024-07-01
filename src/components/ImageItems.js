import React from "react";
import styles from "../styles/ExpandingCardsPage.module.css";

const ImageItem = ({ activation, src, alt, handleClick }) => {
  return (
    <div
      className={`${styles.item} ${activation ? styles.active : ""}`}
      onClick={handleClick}
    >
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default ImageItem;
