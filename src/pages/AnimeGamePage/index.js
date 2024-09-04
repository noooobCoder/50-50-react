import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";

const AnimeGame = () => {
  const [screen, setScreen] = useState(0);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [waifus, setWaifus] = useState([]);
  const [selectedWaifu, setSelectedWaifu] = useState(null);

  const handleStart = () => {
    setScreen(1);
  };

  const handleSelect = (waifu) => {
    setSelectedWaifu(waifu);
    setScreen(2);
  };

  useEffect(() => {
    let interval;
    if (screen === 2) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [screen]);

  const getRandomLocation = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
  };

  const createWaifu = useCallback(() => {
    const { x, y } = getRandomLocation();
    const newWaifu = {
      id: Date.now(),
      x,
      y,
      src: selectedWaifu.src,
      alt: selectedWaifu.alt,
      rotation: Math.random() * 360,
      caught: false,
    };
    setWaifus((prevWaifus) => [...prevWaifus, newWaifu]);
  }, [selectedWaifu]);

  useEffect(() => {
    if (screen === 2) {
      setTimeout(() => createWaifu(), 1000);
    }
  }, [createWaifu, screen]);

  const increaseTime = () => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `Time: ${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
  };

  const catchWaifu = (id) => {
    setScore((prevScore) => prevScore + 1);

    setWaifus((prevWaifus) =>
      prevWaifus.map((waifu) =>
        waifu.id === id ? { ...waifu, caught: true } : waifu
      )
    );

    setTimeout(() => {
      setWaifus((prevWaifus) => prevWaifus.filter((waifu) => waifu.id !== id));
    }, 2000);

    addWaifus();
  };

  const addWaifus = () => {
    setTimeout(createWaifu, 1000);
    setTimeout(createWaifu, 1500);
  };

  return (
    <div className={styles.body}>
      <div className={`${styles.screen} ${screen > 0 ? styles.up : ""}`}>
        <h1 className={styles.title}>Catch The Waifu</h1>
        <button className={styles.btn} onClick={handleStart}>
          Play Game
        </button>
      </div>
      <div className={`${styles.screen} ${screen > 1 ? styles.up : ""}`}>
        <h1 className={styles.title}>Which is your favorite character?</h1>
        <ul className={styles.waifuList}>
          <li>
            <button
              className={styles.waifuButton}
              onClick={() =>
                handleSelect({ alt: "Elaina", src: "images/Elaina.png" })
              }
            >
              <p>Elaina</p>
              <img
                className={styles.image}
                src="images/Elaina.png"
                alt="Elaina"
              />
            </button>
          </li>
          <li>
            <button
              className={styles.waifuButton}
              onClick={() =>
                handleSelect({
                  alt: "SilverWolf",
                  src: "images/SilverWolf.png",
                })
              }
            >
              <p>Silver Wolf</p>
              <img
                className={styles.image}
                src="images/SilverWolf.png"
                alt="SilverWolf"
              />
            </button>
          </li>
          <li>
            <button
              className={styles.waifuButton}
              onClick={() =>
                handleSelect({ alt: "Nijika", src: "images/Nijika.png" })
              }
            >
              <p>Nijika</p>
              <img
                className={styles.image}
                src="images/Nijika.png"
                alt="Nijika"
              />
            </button>
          </li>
        </ul>
      </div>
      <div className={`${styles.screen} ${styles.gameContainer}`}>
        <h3 className={styles.time}>Time: {increaseTime()}</h3>
        <h3 className={styles.score}>Score: {score}</h3>
        <h5
          className={`${styles.message} ${
            score + 1 > 19 ? styles.visible : ""
          }`}
        >
          Are you happy yet? <br /> You are playing an endless game!
        </h5>
        {waifus.map((waifu) => (
          <div
            className={`${styles.waifu} ${waifu.caught ? styles.caught : ""}`}
            key={waifu.id}
            style={{ top: waifu.y, left: waifu.x }}
          >
            <img
              className={styles.image}
              src={waifu.src}
              alt={waifu.alt}
              style={{
                transform: `rotate(${waifu.rotation}deg)`,
              }}
              onClick={() => catchWaifu(waifu.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AnimeGame;
