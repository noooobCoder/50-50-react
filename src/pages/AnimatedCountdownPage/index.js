import React, { useState } from "react";
import styles from "./styles.module.css";

const AnimatedCountdown = () => {
  const [nums, setNums] = useState([
    { number: 3, state: "in" },
    { number: 2, state: "prepare" },
    { number: 1, state: "prepare" },
  ]);

  const [isAnimate, setIsAnimate] = useState(true);

  const resetDom = () => {
    setIsAnimate(true);
    setNums([
      { number: 3, state: "in" },
      { number: 2, state: "prepare" },
      { number: 1, state: "prepare" },
    ]);
  };

  const handleAnimation = (e, idx) => {
    setNums((prevNums) => {
      return prevNums;
    });
    if (e.animationName.includes("goIn") && idx !== nums.length - 1) {
      setNums((prevNums) =>
        prevNums.map((num, index) =>
          index === idx ? { ...num, state: "out" } : num
        )
      );
    } else if (e.animationName.includes("goOut") && idx !== nums.length - 1) {
      setNums((prevNums) =>
        prevNums.map((num, index) =>
          index === idx + 1 ? { ...num, state: "in" } : num
        )
      );
    } else {
      setIsAnimate((prev) => !prev);
    }
  };

  const handleReplay = () => {
    resetDom();
  };

  return (
    <div className={styles.body}>
      <div className={`${styles.counter} ${isAnimate ? "" : styles.hide}`}>
        <div className={styles.nums}>
          {nums.map((num, idx) => (
            <span
              key={idx}
              className={`${
                num.state === "prepare"
                  ? ""
                  : num.state === "in"
                  ? styles.in
                  : styles.out
              } ${styles.num}`}
              onAnimationEnd={(e) => handleAnimation(e, idx)}
            >
              {num.number}
            </span>
          ))}
        </div>
        <h4 className={styles.prepare}>Get Ready</h4>
      </div>
      <div className={`${styles.final} ${isAnimate ? "" : styles.show}`}>
        <h1 className={styles.begin}>Go</h1>
        <button className={styles.replay} onClick={handleReplay}>
          Replay
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
