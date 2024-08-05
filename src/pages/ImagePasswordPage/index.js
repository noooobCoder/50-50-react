import React, { useState } from "react";
import styles from "./styles.module.css";

const ImagePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.body}>
      <div
        className={styles.back}
        style={{ filter: `blur(${Math.max(0, 20 - password.length * 2)}px)` }}
      ></div>
      <div className={`${styles.container} p-10 bg-white rounded shadow-md`}>
        <div className={`${styles.header}`}>
          <h1 className={`${styles.h1} text-3xl`}>Image Password Strength</h1>
          <p className={`${styles.p} text-sm text-gray-700`}>
            Change the Password to see the Effect
          </p>
        </div>
        <div className={`${styles.email} text-left`}>
          <label htmlFor="email" className={`${styles.label} text-gray-900`}>
            Email:
          </label>
          <input
            className={`${styles.input} border block w-full p-2 mt-2 rounded`}
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${styles.password} text-left`}>
          <label htmlFor="password" className={`${styles.label} text-gray-900`}>
            Password:
          </label>
          <input
            className={`${styles.input} border block w-full p-2 mt-2 rounded`}
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={`${styles.button} bg-black text-white py-2 mt-4 inline-block w-full rounded`}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ImagePassword;
