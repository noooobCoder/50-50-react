import React from "react";
import styles from "../pages/DrinkWaterPage/styles.module.css";

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
