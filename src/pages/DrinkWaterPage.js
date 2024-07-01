import React, { useState } from "react";
import SmallCup from "../components/SmallCup";
import styles from "../styles/DrinkWaterPage.module.css";

const DrinkWaterPage = () => {
  const totalCups = 8;
  const [fullCups, setFullCups] = useState(0);

  const cups = [
    { id: 0, capacity: "250 ml" },
    { id: 1, capacity: "250 ml" },
    { id: 2, capacity: "250 ml" },
    { id: 3, capacity: "250 ml" },
    { id: 4, capacity: "250 ml" },
    { id: 5, capacity: "250 ml" },
    { id: 6, capacity: "250 ml" },
    { id: 7, capacity: "250 ml" },
  ];

  const handleCupClick = (idx) => {
    if (fullCups === idx + 1) {
      setFullCups(fullCups - 1);
    } else {
      setFullCups(idx + 1);
    }
  };

  const percentage = (fullCups / totalCups) * 100;
  const remainedLitres = 2 - (fullCups / totalCups) * 2;

  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Drink Water</h1>
      <h3 className={styles.h3}>Goal: 2 Litres</h3>
      <div className={styles.cup}>
        <div
          className={styles.remained}
          style={{
            visibility: fullCups === totalCups ? "hidden" : "visible",
            height:
              fullCups === totalCups ? "0" : `${(100 - percentage) * 3.3}px`,
          }}
        >
          <span className={styles.litres}>{remainedLitres}L</span>
          <small className={styles.small}>Remained</small>
        </div>
        <div
          className={styles.percentage}
          style={{
            visibility: fullCups ? "visible" : "hidden",
            height: fullCups === 0 ? "0" : `${percentage * 3.3}px`,
          }}
        >
          {percentage}%
        </div>
      </div>
      <p className={styles.text}>
        Select How many Glasses of Water that you have Drank
      </p>
      <div className={styles.cups}>
        {cups.map((cup) => (
          <SmallCup
            key={cup.id}
            full={cup.id < fullCups ? true : false}
            handleClick={() => handleCupClick(cup.id)}
            capacity={cup.capacity}
          />
        ))}
      </div>
    </div>
  );
};

export default DrinkWaterPage;
