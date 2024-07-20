import React, { useState } from "react";
import styles from "./styles.module.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [settings, setSettings] = useState({
    upper: true,
    lower: true,
    number: true,
    symbol: true,
  });

  const [toasts, setToasts] = useState([]);

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const handleGenerate = () => {
    let generatedPassword = "";
    const { upper, lower, number, symbol } = settings;
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      return;
    }

    for (let i = 0; i < length; i += 1) {
      const funcName = Object.keys(
        typesArr[Math.floor(Math.random() * typesCount)]
      );
      generatedPassword += randomFunc[funcName]();
    }

    setPassword(generatedPassword);
  };

  const handleCopyToClipboard = () => {
    if (!password) {
      return;
    } else {
      navigator.clipboard.writeText(password);
      const id = Date.now();
      setToasts((prevToasts) => [...prevToasts, { id, message: "Copied" }]);

      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id)
        );
      }, 1200);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.title}>Password Generator</h2>
        <div className={styles.input}>
          <span className={styles.password}>{password}</span>
          {toasts.map((toast) => (
            <div key={toast.id} className={styles.toast}>
              {toast.message}
            </div>
          ))}
          <button onClick={handleCopyToClipboard} className={styles.btn}>
            <i className={`far fa-clipboard ${styles.icon}`}></i>
          </button>
        </div>
        <div className={styles.settings}>
          <div className={styles.setting}>
            <label className={styles.label}>Password Length</label>
            <input
              type="number"
              min={4}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className={styles.number}
            />
          </div>
          <div className={styles.setting}>
            <label className={styles.label}>Include Uppercase Letters</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={settings.upper}
              onChange={(e) =>
                setSettings({ ...settings, upper: e.target.checked })
              }
            />
          </div>
          <div className={styles.setting}>
            <label className={styles.label}>Include Lowercase Letters</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={settings.lower}
              onChange={(e) =>
                setSettings({ ...settings, lower: e.target.checked })
              }
            />
          </div>
          <div className={styles.setting}>
            <label className={styles.label}>Include Number</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={settings.number}
              onChange={(e) =>
                setSettings({ ...settings, number: e.target.checked })
              }
            />
          </div>
          <div className={styles.setting}>
            <label className={styles.label}>Include Symbols</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={settings.symbol}
              onChange={(e) =>
                setSettings({ ...settings, symbol: e.target.checked })
              }
            />
          </div>
        </div>
        <button
          onClick={handleGenerate}
          className={`${styles.btn} ${styles.largeBtn}`}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
