import { React, useState } from "react";
import styles from "../styles/AnimatedNavigationPage.module.css";

const AnimatedNavigationPage = () => {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.body}>
      <nav className={`${styles.nav} ${active ? styles.active : ""}`}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="http://localhost:3000/animated-navigation"
            >
              Home
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="http://localhost:3000/animated-navigation"
            >
              Work
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="http://localhost:3000/animated-navigation"
            >
              About
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="http://localhost:3000/animated-navigation"
            >
              Contact
            </a>
          </li>
        </ul>
        <button className={styles.icon} onClick={handleClick}>
          <div className={`${styles.line} ${styles.line1}`}></div>
          <div className={`${styles.line} ${styles.line2}`}></div>
          <div className={`${styles.line} ${styles.line3}`}></div>
        </button>
      </nav>
    </div>
  );
};

export default AnimatedNavigationPage;
