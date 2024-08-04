import React, { useState } from "react";
import styles from "./styles.module.css";

const ImagePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.body}>
      <div
        className={styles.bg}
        style={{ filter: `blur(${Math.max(0, 20 - password.length * 2)}px)` }}
      ></div>
      <div
        className={`${styles.container} ${styles["p-10"]} ${styles["bg-white"]} ${styles["rounded"]} ${styles["shadow-md"]}`}
      >
        <div className={`${styles.header}`}>
          <h1 className={`${styles.h1} ${styles["text-3xl"]}`}>
            Image Password Strength
          </h1>
          <p
            className={`${styles.p} ${styles["text-sm"]} ${styles["text-gray-700"]}`}
          >
            Change the Password to see the Effect
          </p>
        </div>
        <div className={`${styles.email} ${styles["text-left"]}`}>
          <label
            htmlFor="email"
            className={`${styles.label} ${styles["text-gray-900"]}`}
          >
            Email:
          </label>
          <input
            className={`${styles.input} ${styles["border"]} ${styles["block"]} ${styles["w-full"]} ${styles["p-2"]} ${styles["mt-2"]} ${styles["rounded"]}`}
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${styles.password} ${styles["text-left"]}`}>
          <label
            htmlFor="password"
            className={`${styles.label} ${styles["text-gray-900"]}`}
          >
            Password:
          </label>
          <input
            className={`${styles.input} ${styles["border"]} ${styles["block"]} ${styles["w-full"]} ${styles["p-2"]} ${styles["mt-2"]} ${styles["rounded"]}`}
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={`${styles.button}`}>Submit</button>
      </div>
    </div>
  );
};

export default ImagePassword;
