import React, { useState } from "react";
import styles from "./styles.module.css";

const QuizApp = () => {
  const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];

  const options = ["a", "b", "c", "d"];

  const [qid, setQid] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[qid].correct) {
      setScore(score + 1);
    }
    setQid(qid + 1);
    setSelectedAnswer(null);
  };

  return (
    <div className={styles.body}>
      <div className={styles.quizContainer}>
        {qid < quizData.length ? (
          <>
            <div className={styles.quizHeader}>
              <h2>{quizData[qid].question}</h2>
              <ul>
                {options.map((option) => (
                  <li>
                    <input
                      type="radio"
                      name="answer"
                      id={option}
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={handleAnswerChange}
                    />
                    <label htmlFor={option}>{quizData[qid][option]}</label>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleNextQuestion}>
              {qid === quizData.length - 1 ? "Submit" : "Next Question"}
            </button>
          </>
        ) : (
          <h2>{`You Answered ${score}/${quizData.length} Questions Correctly`}</h2>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
