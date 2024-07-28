import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

const ImageCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const slideRef = useRef(null);

  const images = [
    { id: 0, url: "images/01.JPG" },
    { id: 1, url: "images/02.JPG" },
    { id: 2, url: "images/03.JPG" },
    { id: 3, url: "images/04.JPG" },
  ];

  const handleClickPrev = () => {
    setActiveImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
    // slideRef.current.style.transform = `translateX(-${activeImage * 500}px)`;
  };

  const handleClickNext = () => {
    setActiveImage((prevImage) => (prevImage + 1) % images.length);
    // slideRef.current.style.transform = `translateX(-${activeImage * 500}px)`;
  };

  useEffect(() => {
    slideRef.current.style.left = `${500 * (images.length - 1)}px`;
  }, [images.length]);

  useEffect(() => {
    const updateImage = () => {
      slideRef.current.style.transform = `translateX(-${activeImage * 500}px)`;
    };
    updateImage();

    const handleResize = () => {
      updateImage();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeImage]);

  return (
    <div className={styles.body}>
      <div className={styles.imageContainer} ref={slideRef}>
        {images.map((image) => (
          <div
            key={image.id}
            className={styles.image}
            style={{ backgroundImage: `url${image.url}` }}
          ></div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.prev}`}
          onClick={handleClickPrev}
        >
          Prev
        </button>
        <button
          className={`${styles.button} ${styles.next}`}
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
