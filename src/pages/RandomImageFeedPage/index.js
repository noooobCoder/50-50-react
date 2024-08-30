import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const RandomImageFeed = () => {
  const accessKey = "GcHTTK6c3TR23PdVo62iWLLK5iwA-dlP-j8WY4ni1ns";
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=2`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Random Image Feed</h1>
      <div className={styles.container}>
        {images.map((image) => (
          <div className={styles.imageContainer} key={image.id}>
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className={styles.image}
            />
            <div className={styles.imageDetails}>
              <p>
                <strong>Author:</strong> {image.user.name}
              </p>
              <p>
                <strong>Likes:</strong> {image.likes}
              </p>
              <p>
                <strong>Downloads:</strong> {image.downloads}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomImageFeed;
