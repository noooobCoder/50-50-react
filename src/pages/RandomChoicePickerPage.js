import React, { useState } from "react";
import styles from "../styles/RandomChoicePickerPage.module.css";

const RandomChoicePickerPage = () => {
  const title = `Enter all of the Choices divided by Commas (',') \n Press Enter When You're Done`;
  const [inputValue, setInputValue] = useState("");
  const [choices, setChoices] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handleKeyUp = (event) => {
    const choiceArray = inputValue
      .split(",")
      .filter((choice) => choice.trim() !== "")
      .map((choice) => choice.trim());
    setChoices(choiceArray);
    setHighlightedIndex(null);
    if (event.key === "Enter") {
      setTimeout(() => {
        setInputValue("");
        randomSelect();
      }, 100);
    }
  };

  const randomSelect = () => {
    const times = 30;

    const pickRandomIndex = (highlightedIndex) => {
      const indices = choices.map((_, index) => index);
      if (highlightedIndex !== null) {
        indices.splice(highlightedIndex, 1);
      }
      return indices[Math.floor(Math.random() * indices.length)];
    };

    const interval = setInterval(() => {
      setHighlightedIndex((highlightedIndex) =>
        pickRandomIndex(highlightedIndex)
      );
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        setHighlightedIndex((highlightedIndex) =>
          pickRandomIndex(highlightedIndex)
        );
      }, 100);
    }, times * 100);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <textarea
          placeholder="Enter the Choices here..."
          className={styles.textarea}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </div>
      <div>
        {choices.map((choice, index) => (
          <span
            className={`${styles.tag} ${
              index === highlightedIndex ? styles.highlight : ""
            }`}
            key={index}
          >
            {choice}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RandomChoicePickerPage;
