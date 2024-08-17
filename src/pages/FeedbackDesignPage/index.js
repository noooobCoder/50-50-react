import React, { useState } from "react";
import styles from "./styles.module.css";

const FeedbackDesign = () => {
  const [activeNum, setActiveNum] = useState(3);
  const [finish, setFinish] = useState(false);

  const rating = [
    {
      num: 1,
      text: "Unhappy",
      src: "images/unhappy.png",
    },
    {
      num: 2,
      text: "Neutral",
      src: "images/neutral.svg",
    },
    {
      num: 3,
      text: "Satisfied",
      src: "images/satisfied.svg",
    },
  ];

  const handleFinish = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setFinish((oldState) => !oldState);
      });
    } else {
      setFinish((oldState) => !oldState);
    }
  };

  return (
    <div className={styles.body}>
      {/* <div className={styles.panel}> */}
      {finish ? (
        <div className={styles.panel}>
          <i className={`${styles.icon} fas fa-heart`}></i>
          <strong>Thank You!</strong>
          <br />
          <strong>Feedback: {rating[activeNum - 1].text}</strong>
          <br />
          <p className={styles.end}>
            We'll use your feedback to improve our customer support.
          </p>
          <button className={styles.btn} onClick={handleFinish}>
            Back
          </button>
        </div>
      ) : (
        <div className={styles.panel}>
          <strong>
            How satisfied are you with our <br /> customer support performance?
          </strong>
          <div className={styles.container}>
            {rating.map((item) => (
              <div
                className={`${styles.item} ${
                  activeNum === item.num ? styles.active : ""
                }`}
                key={item.num}
                onClick={() => setActiveNum(item.num)}
              >
                <img src={item.src} alt={item.text} />
                <small>{item.text}</small>
              </div>
            ))}
          </div>
          <button className={styles.btn} onClick={handleFinish}>
            Send Review
          </button>
        </div>
      )}
    </div>
    // </div>
  );
};

export default FeedbackDesign;
