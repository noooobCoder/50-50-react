import React from "react";
import styles from "../pages/PokedexPage/styles.module.css";

const Poke = ({ src, name, number, type, color }) => {
  const backgroundStyle = {
    background: color,
  };
  return (
    <div className={styles.pokeCard} style={backgroundStyle}>
      <div className={styles.imgContainer}>
        <img src={src} alt={name} className={styles.img} />
      </div>
      <div className={styles.info}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.name}>{name}</h3>
        <small className={styles.typeBody}>
          Type:
          <span className={styles.type}>{" " + type.join(" & ")}</span>
        </small>
      </div>
    </div>
  );
};

export default Poke;
