import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const StickyNavbar = () => {
  const [current, setCurrent] = useState("Home");
  const navRef = useRef(null);

  const navItems = [
    {
      href: "#",
      text: "Home",
    },
    {
      href: "#",
      text: "About",
    },
    {
      href: "#",
      text: "Services",
    },
    {
      href: "#",
      text: "Contact",
    },
  ];

  const handleClick = (e) => {
    console.log(e.target.textContent);
    setCurrent(e.target.textContent);
  };

  const fixNav = () => {
    if (window.scrollY > navRef.current.offsetHeight) {
      navRef.current.classList.add(styles.active);
    } else {
      navRef.current.classList.remove(styles.active);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
    return () => window.removeEventListener("scroll", fixNav);
  }, []);

  return (
    <div className={styles.body}>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.container}>
          <h1 className={styles.title}>My Website</h1>
          <ul className={styles.ul}>
            {navItems.map((item, index) => (
              <li className={styles.li} key={index}>
                <a
                  href={item.href}
                  className={`${styles.a} ${
                    current === item.text ? styles.current : ""
                  }`}
                  onClick={handleClick}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome to My Website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            hic.
          </p>
        </div>
      </div>
      <section className={`${styles.content} ${styles.container}`}>
        <h2>Content One</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore
          asperiores cupiditate, unde molestias repudiandae obcaecati
          doloremque, vitae harum accusantium mollitia debitis laborum ratione,
          eaque nulla nobis non hic quia. Sit nemo obcaecati similique et,
          veniam laudantium quae ipsa nam sunt dolores! Quo reiciendis, eaque
          laudantium cupiditate commodi eius odio quisquam ipsa consequuntur
          quia distinctio repudiandae eos explicabo, quod consequatur, unde
          voluptatibus magni aperiam labore? Laboriosam modi magnam cum corporis
          nesciunt eveniet velit sapiente maxime amet, ut unde quos quasi
          dolorem iste ad voluptatem nostrum nam vel nulla minus. Eligendi sed
          harum et accusantium temporibus, tenetur delectus repudiandae
          doloremque unde.
        </p>
        <h3>Content Two</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          dicta, illum deleniti officiis aspernatur, excepturi quaerat, maxime
          autem suscipit quisquam asperiores neque. Nam odit sed sint cupiditate
          placeat ea corrupti, quae perspiciatis, rem nisi dolore earum, optio
          cum quia! Impedit odit voluptate voluptatibus commodi corporis
          consequatur excepturi, similique ab? Animi?
        </p>
      </section>
    </div>
  );
};

export default StickyNavbar;
