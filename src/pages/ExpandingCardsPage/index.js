import styles from "./styles.module.css";
import React, { useState } from "react";
import ImageItem from "../../components/ImageItems";

const ExpandingCardsPage = () => {
  const [activationNum, setActivationNum] = useState(0);
  const images = [
    {
      id: 1,
      src: process.env.PUBLIC_URL + "/images/01.JPG",
      alt: "Elainasama01",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "/images/02.JPG",
      alt: "Elainasama02",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "/images/03.JPG",
      alt: "Elainasama03",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "/images/04.JPG",
      alt: "Elainasama04",
    },
  ];
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {images.map((image, index) => (
          <ImageItem
            key={image.id}
            activation={index === activationNum}
            src={image.src}
            alt={image.alt}
            handleClick={() => setActivationNum(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandingCardsPage;
