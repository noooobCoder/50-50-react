import React, { useState } from "react";
import styles from "./styles.module.css";

const CustomRangeSlider = () => {
  const [value, setValue] = useState(50);

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>Custom Range Slider</h2>
      <div className={styles.rangeContainer}>
        <input
          type="range"
          min="0"
          max="100"
          className={styles.range}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label
          htmlFor="range"
          style={{ left: `${value * 2.8 - 30}px` }}
          className={styles.rangeLabel}
        >
          {value}
        </label>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
