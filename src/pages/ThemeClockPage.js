import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/ThemeClockPage.module.css";
import useClock from "../hooks/useClock";

const ThemeClockPage = () => {
  const htmlRef = useRef(document.querySelector("html"));
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (htmlRef.current) {
      htmlRef.current.classList.toggle(styles.dark);
      setIsDarkMode(!isDarkMode);
    }
  };

  const {
    day,
    month,
    date,
    hour,
    minute,
    second,
    hourScale,
    minuteScale,
    // secondScale,
    ampm,
    originSecondScale,
  } = useClock();
  // console.log(originSecondScale);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--origin-second",
      `${originSecondScale}deg`
    );
  }, [originSecondScale]);

  return (
    <div className={styles.body}>
      <button className={styles.toggle} onClick={toggleDarkMode}>{`${
        isDarkMode ? "Dark" : "Light"
      } Mode`}</button>
      <div className={styles.container}>
        <div className={styles.clock}>
          <div
            className={`${styles.needle} ${styles.hour}`}
            style={{
              transform: `translate(-50%, -100%) rotate(${hourScale}deg)`,
            }}
          ></div>
          <div
            className={`${styles.needle} ${styles.minute}`}
            style={{
              transform: `translate(-50%, -100%) rotate(${minuteScale}deg)`,
            }}
          ></div>
          <div
            className={`${styles.needle} ${styles.second}`}
            // style={{
            //   transform: `translate(-50%, -100%) rotate(${secondScale}deg)`,
            // }}
          ></div>
          <div className={styles.center}></div>
        </div>
        <div className={styles.time}>{`${hour}:${
          minute < 10 ? `0${minute}` : minute
        }:${second < 10 ? `0${second}` : second} ${ampm}`}</div>
        <div className={styles.date}>
          {`${day}, ${month}`}
          <span className={styles.circle}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ThemeClockPage;
