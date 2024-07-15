import React, { useState } from "react";
import styles from "./styles.module.css";

const ToastNotification = () => {
  const [toasts, setToasts] = useState([]);

  const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
  ];

  const types = ["info", "success", "error"];

  const getRandomInt = (size) => {
    return Math.floor(Math.random() * size);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const addRandomToast = () => {
    const message = messages[getRandomInt(messages.length)];
    const type = types[getRandomInt(types.length)];
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 2300);
  };

  return (
    <div className={styles.body}>
      <button className={styles.btn} onClick={addRandomToast}>
        Show Notification
      </button>
      <div className={styles.toasts}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${styles.toast} ${styles[toast.type]}`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastNotification;
