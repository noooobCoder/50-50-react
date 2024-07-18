import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const AutoTextEffect = () => {
  const text = `
    “方源，你到底干了什么？！没有乐土大人我们如何抗衡双尊？！”陆畏因跺脚，瞪着方源。
    方源谈笑一声：“很简单，我成尊不就是了？”
    说完，他的气息终于不再掩饰，显露而出。
    九转修为！
    一瞬间战场再次一寂。
    方源一身雪袍，青丝飘扬，纵横战场，气盖山河。他牢牢占据上风，口中忽吟道————
    早岁已知世事艰，仍许飞鸿荡云间。
    一路寒风生如絮，命海沉浮客独行。
    千磨万击心铸铁，担惊竭力铸一剑。
    今朝剑指叠云处，练蛊练人还练天！
    `;
  const [idx, setIdx] = useState(1);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const writeText = () => {
      setIdx((prevIdx) => {
        if (prevIdx >= text.length) {
          return 1;
        }
        return prevIdx + 1;
      });
    };

    const intervalId = setInterval(writeText, 300 / speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const getColor = (index) => {
    // const hue = (index * 10) % 360;
    // return `hsl(${hue}, 100%, 50%)`;
    const min = 30;
    const max = 60;
    const range = max - min;

    const frequency = 0.2;
    const lightness = min + (range / 2) * (1 + Math.sin(frequency * index));
    return `hsl(240, 100%, ${lightness}%)`;
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.text}>
        {text
          .slice(0, idx)
          .split("")
          .map((char, index) => (
            <span key={index} style={{ color: getColor(index) }}>
              {char}
            </span>
          ))}
      </h1>
      <div className={styles.container}>
        <label className={styles.label}>Speed: </label>
        <input
          className={styles.speed}
          type="number"
          id="speed"
          value={speed}
          min="1"
          max="10"
          onChange={handleSpeedChange}
        />
      </div>
    </div>
  );
};

export default AutoTextEffect;
