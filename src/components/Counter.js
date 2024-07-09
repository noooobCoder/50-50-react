import React, { useState, useEffect } from "react";
import styles from "../pages/IncrementingCounterPage/styles.module.css";

const Counter = ({ icon, data, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = data / 200;
    const timer = setTimeout(() => {
      if (count < data) {
        setCount(Math.ceil(count + increment));
      } else {
        setCount(data);
      }
    }, 3);

    return () => clearTimeout(timer);
  }, [count, data]);

  return (
    <div className={styles.container}>
      <i className={icon}></i>
      <div className={styles.counter}>{count}</div>
      <span className={styles.span}>{text}</span>
    </div>
  );
};

export default Counter;
