import React, { useState } from "react";
import styles from "./styles.module.css";

const Hoverboard = () => {
  const SQUARES = 400;
  const [hue, setHue] = useState(Math.floor(Math.random() * 360));

  const getNextColor = () => {
    const nextHue = (hue + 3) % 360;
    setHue(nextHue);
    return `hsl(${nextHue}, 100%, 50%)`;
  };

  const handleMouseOver = (e) => {
    const color = getNextColor();
    e.target.style.backgroundColor = color;
    e.target.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`;
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = `#1d1d1d`;
    e.target.style.boxShadow = `0 0 2px #1d1d1d 0 0 10px #1d1d1d`;
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {Array(SQUARES)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={styles.square}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          ))}
      </div>
    </div>
  );
};

export default Hoverboard;
