import React from "react";
import styles from "../styles/DrinkWaterPage.module.css";

const SmallCup = ({ full, handleClick, capacity }) => {
  return (
    <div
      className={`${styles.cup} ${styles.smallCup} ${full ? styles.full : ""}`}
      onClick={handleClick}
    >
      {capacity}
    </div>
  );
};

export default SmallCup;
