import React, { useState } from "react";
import styles from "./styles.module.css";

const DoubleClickHeart = () => {
  // const [times, setTimes] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
  const [heartPosition, setHeartPosition] = useState({
    top: 0,
    left: 0,
  });

  const [current, setCurrent] = useState(0);

  const [imgItems, setImgItems] = useState([
    { id: 0, url: "images/01.JPG", likes: 0 },
    { id: 1, url: "images/02.JPG", likes: 0 },
    { id: 2, url: "images/03.JPG", likes: 0 },
    { id: 3, url: "images/04.JPG", likes: 0 },
  ]);

  const handleClickLeft = () => {
    setCurrent((prev) => (prev + imgItems.length - 1) % imgItems.length);
  };

  const handleClickRight = () => {
    setCurrent((prev) => (prev + 1) % imgItems.length);
  };

  const handleDoubleClick = (event) => {
    const { clientX, clientY } = event;
    const { top, left } = event.target.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setHeartPosition({ top: y, left: x });

    setShowHeart(true);

    setImgItems((prev) => {
      const newImgItems = [...prev];
      newImgItems[current].likes++;
      return newImgItems;
    });

    setTimeout(() => {
      setShowHeart(false);
    }, 650);
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>
        Double Click on the image to{" "}
        <i className={`${styles.icon} fas fa-heart`}></i> it
      </h1>
      <small>You liked it {imgItems[current].likes} times</small>
      <div
        className={styles.loveMe}
        onDoubleClick={handleDoubleClick}
        style={{
          backgroundImage: `url(${imgItems[current].url})`,
        }}
      >
        <button
          className={`${styles.btn} ${styles.left}`}
          onClick={handleClickLeft}
          onDoubleClick={(event) => event.stopPropagation()}
        >
          <i className={`fas fa-arrow-left ${styles.arrow}`}></i>
        </button>
        <button
          className={`${styles.btn} ${styles.right}`}
          onClick={handleClickRight}
          onDoubleClick={(event) => event.stopPropagation()}
        >
          <i className={`fas fa-arrow-right ${styles.arrow}`}></i>
        </button>
        {showHeart ? (
          <i
            style={heartPosition}
            className={`${styles.icon} fas fa-heart`}
          ></i>
        ) : null}
      </div>
    </div>
  );
};

export default DoubleClickHeart;
