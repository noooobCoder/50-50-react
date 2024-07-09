import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";

const BackgroundSliderPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeButton, setActiveButton] = useState(null); // To track which button is active

  const handleKeyDown = (e) => {
    if (e.keyCode === 39 || e.keyCode === 68) {
      // Right arrow or 'd'
      handleRightClick();
      setActiveButton("right");
    } else if (e.keyCode === 37 || e.keyCode === 65) {
      // Left arrow or 'a'
      handleLeftClick();
      setActiveButton("left");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 39 || e.keyCode === 68) {
      // Right arrow or 'd'
      setActiveButton(null);
    } else if (e.keyCode === 37 || e.keyCode === 65) {
      // Left arrow or 'a'
      setActiveButton(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  const handleRightClick = () => {
    setCurrentImage((currentImage + 1) % 4);
  };

  const handleLeftClick = () => {
    setCurrentImage((currentImage + 3) % 4);
  };

  const images = [
    { id: 1, src: "../../images/01.JPG" },
    { id: 2, src: "../../images/02.JPG" },
    { id: 3, src: "../../images/03.JPG" },
    { id: 4, src: "../../images/04.JPG" },
  ];
  return (
    <div
      className={styles.body}
      style={{ backgroundImage: `url(${images[currentImage].src})` }}
    >
      <div className={styles.container}>
        {images.map((image) => (
          <div
            className={`${styles.slide} ${
              currentImage === image.id - 1 ? styles.active : ""
            }`}
            key={image.id}
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
        <button
          className={`${styles.arrow} ${styles.leftArrow} ${
            activeButton === "left" ? styles.active : ""
          }`}
          onClick={handleLeftClick}
        >
          <i className={`fas fa-arrow-left ${styles.leftIcon}`}></i>
        </button>
        <button
          className={`${styles.arrow} ${styles.rightArrow} ${
            activeButton === "right" ? styles.active : ""
          }`}
          onClick={handleRightClick}
        >
          <i className={`fas fa-arrow-right ${styles.rightIcon}`}></i>
        </button>
      </div>
    </div>
  );
};

export default BackgroundSliderPage;
