import React, { useState } from "react";
import styles from "./styles.module.css";

const ElainaNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.body}>
      <button
        className={`${styles.navBtn} ${styles.openBtn}`}
        onClick={handleOpen}
      >
        <i className={`fas fa-bars ${styles.openIcon}`}></i>
      </button>
      <img src="/images/logo.webp" alt="logo" className={styles.logo} />
      <label className={styles.description}>Mobile Navigation</label>
      <div
        className={`${styles.nav} ${styles.navBlue} ${
          isOpen ? styles.open : ""
        }`}
      >
        <div
          className={`${styles.nav} ${styles.navPink} ${
            isOpen ? styles.open : ""
          }`}
        >
          <div
            className={`${styles.nav} ${styles.navWhite} ${
              isOpen ? styles.open : ""
            }`}
          >
            <button
              className={`${styles.navBtn} ${styles.closeBtn}`}
              onClick={handleClose}
            >
              <i className={`fas fa-bars ${styles.closeIcon}`}></i>
            </button>
            <img src="/images/logo.webp" alt="logo" className={styles.logo} />
            <ul className={styles.list}>
              <li>
                <a href="##">Company</a>
              </li>
              <li>
                <a href="##">Novel</a>
              </li>
              <li>
                <a href="##">Series Lineup</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="##">Story</a>
                  </li>
                  <li>
                    <a href="##">Character</a>
                  </li>
                  <li>
                    <a href="##">Special</a>
                  </li>
                  <li>
                    <a href="##">Trail</a>
                  </li>
                  <li>
                    <a href="##">Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElainaNavigation;
