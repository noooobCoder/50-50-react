import React, { useState } from "react";
import styles from "../styles/ButtonRippleEffectPage.module.css";

const ButtonRipplePage = () => {
  const [circles, setCircles] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const bottonTop = e.target.offsetTop;
    const bottonLeft = e.target.offsetLeft;

    const xInside = x - bottonLeft;
    const yInside = y - bottonTop;

    const newCircle = {
      left: xInside,
      top: yInside,
      id: new Date().getTime(),
    };

    setCircles([...circles, newCircle]);

    setTimeout(() => {
      setCircles((currentCircles) => {
        return currentCircles.filter((circle) => circle.id !== newCircle.id);
      });
    }, 500);
  };

  return (
    <div className={styles.body}>
      <button className={styles.ripple} onClick={handleClick}>
        click me
        {circles.map((circle) => (
          <span
            key={circle.id}
            className={styles.circle}
            style={{ top: circle.top, left: circle.left }}
          />
        ))}
      </button>
    </div>
  );
};

export default ButtonRipplePage;
