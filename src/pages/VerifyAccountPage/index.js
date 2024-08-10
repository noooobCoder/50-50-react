import React, { useRef } from "react";
import styles from "./styles.module.css";

const VerifyAccount = () => {
  const inputRefs = useRef([]);
  const handleKeyDown = (e, idx) => {
    if (e.key >= 0 && e.key <= 9) {
      inputRefs.current[idx].value = "";

      setTimeout(() => {
        if (idx < inputRefs.current.length - 1) {
          inputRefs.current[idx + 1].focus();
        }
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        if (idx > 0) {
          inputRefs.current[idx - 1].focus();
        }
      }, 10);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Verify Your Account</h2>
        <p className={styles.p}>
          We emailed you the six digit code to cool_guy@email.com <br /> Enter
          the code below to confirm your email address
        </p>
        <div className={styles.codeContainer}>
          {[...Array(6)].map((_, idx) => (
            <input
              key={idx}
              className={styles.code}
              type="number"
              inputMode="numeric"
              min={0}
              max={9}
              maxLength={1}
              ref={(el) => (inputRefs.current[idx] = el)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              required
            />
          ))}
        </div>
        <small className={styles.info}>
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </small>
      </div>
    </div>
  );
};

export default VerifyAccount;
