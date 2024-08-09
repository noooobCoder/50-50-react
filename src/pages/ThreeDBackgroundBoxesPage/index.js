import React, { useState } from "react";
import styles from "./styles.module.css";

const ThreeDBackgroundBoxes = () => {
  const [isMagic, setIsMagic] = useState(false);
  const createBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        boxes.push(
          <div
            key={`${i}-${j}`}
            className={styles.box}
            style={{ backgroundPosition: `-${125 * j}px -${125 * i}px` }}
          ></div>
        );
      }
    }
    return boxes;
  };

  const handleClick = () => {
    setIsMagic(!isMagic);
  };

  return (
    <div className={styles.body}>
      <button className={styles.magic} onClick={handleClick}>
        Magic 🎩
      </button>
      <div className={`${styles.boxes} ${isMagic ? styles.big : ""}`}>
        {createBoxes()}
      </div>
    </div>
  );
};

export default ThreeDBackgroundBoxes;
