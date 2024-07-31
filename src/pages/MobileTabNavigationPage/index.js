import React, { useState } from "react";
import styles from "./styles.module.css";

const MobileTabNavigation = () => {
  const [activeId, setActiveId] = useState(1);
  const pageInfo = [
    {
      id: 1,
      src: "images/01.JPG",
      name: "Home",
      classname: `fas fa-home ${styles.icon}`,
    },
    {
      id: 2,
      src: "images/02.JPG",
      name: "Work",
      classname: `fas fa-briefcase ${styles.icon}`,
    },
    {
      id: 3,
      src: "images/03.JPG",
      name: "Blog",
      classname: `fas fa-book-open ${styles.icon}`,
    },
    {
      id: 4,
      src: "images/04.JPG",
      name: "About Us",
      classname: `fas fa-user ${styles.icon}`,
    },
  ];

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className={styles.body}>
      <div className={styles.phone}>
        {pageInfo.map((page) => (
          <img
            key={page.id}
            src={page.src}
            alt={page.name}
            className={`${styles.content} ${styles[page.name.split(" ")[0]]} ${
              page.id === activeId ? styles.show : ""
            }`}
          />
        ))}
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {pageInfo.map((page) => (
              <li
                onClick={() => handleClick(page.id)}
                key={page.id}
                className={`${styles.li} ${
                  page.id === activeId ? styles.active : ""
                }`}
              >
                <i className={page.classname}>
                  <p className={styles.name}>{page.name}</p>
                </i>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileTabNavigation;
