import React, { useState } from "react";
import styles from "./styles.module.css";

const GoodCheapFastPage = () => {
  const [queue, setQueue] = useState([]);

  const handleChange = (prop) => {
    if (queue.includes(prop)) {
      setQueue(queue.filter((item) => item !== prop));
    } else {
      if (queue.length < 2) {
        setQueue((prevQueue) => [...prevQueue, prop]);
      } else {
        setQueue((prevQueue) => [...prevQueue.slice(1), prop]);
      }
    }
  };

  return (
    <div className={styles.body}>
      <h2>How Do You want Your Project to be ?</h2>
      <div className={styles.container}>
        <input
          id="good"
          type="checkbox"
          className={styles.toggle}
          checked={queue.includes("Good") ? true : false}
          onChange={() => handleChange("Good")}
        />
        <label htmlFor="good" className={styles.label}>
          <div className={styles.ball}></div>
        </label>
        <span>Good</span>
      </div>
      <div className={styles.container}>
        <input
          id="cheap"
          type="checkbox"
          className={styles.toggle}
          checked={queue.includes("Cheap") ? true : false}
          onChange={() => handleChange("Cheap")}
        />
        <label htmlFor="cheap" className={styles.label}>
          <div className={styles.bar}></div>
          <div className={styles.ball}></div>
        </label>
        <span>Cheap</span>
      </div>
      <div className={styles.container}>
        <input
          id="fast"
          type="checkbox"
          className={styles.toggle}
          checked={queue.includes("Fast") ? true : false}
          onChange={() => handleChange("Fast")}
        />
        <label htmlFor="fast" className={styles.label}>
          <div className={styles.bar}></div>
          <div className={styles.ball}></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
};

export default GoodCheapFastPage;
