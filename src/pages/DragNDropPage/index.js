import styles from "./styles.module.css";
import React, { useRef, useState } from "react";

const DragNDropPage = () => {
  const fillRefs = useRef([]);
  const [dragged, setDragged] = useState(false);
  const [sourceId, setSourceId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [empties, setEmpties] = useState([1, 1, null, null, null]);

  const handleDragStart = (index) => () => {
    setSourceId(index);
    fillRefs.current[index].classList.add(styles.hold);
    setTimeout(() => {
      fillRefs.current[index].classList.add("invisible");
    }, 0);
  };

  const handleDragEnd = (index) => () => {
    fillRefs.current[index].className = styles.fill;
    setDragged(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (index) => (e) => {
    e.preventDefault();
    setHoverId(index);
  };

  const handleDragLeave = () => {
    setHoverId(null);
  };

  const handleDrop = (index) => () => {
    const newEmpties = [...empties];
    const temp = newEmpties[sourceId];
    newEmpties[sourceId] = null;
    newEmpties[index] = temp;
    setEmpties(newEmpties);
    setHoverId(null);
  };

  return (
    <div className={styles.body}>
      {empties.map((empty, index) => (
        <div
          key={index}
          className={`${styles.empty} ${
            hoverId === index ? styles.hovered : ""
          }`}
          {...(empty === null && {
            onDragOver: handleDragOver,
            onDragEnter: handleDragEnter(index),
            onDragLeave: handleDragLeave,
            onDrop: handleDrop(index),
          })}
        >
          {empty !== null && !dragged && (
            <div
              className={styles.fill}
              draggable
              onDragStart={handleDragStart(index)}
              onDragEnd={handleDragEnd(index)}
              ref={(el) => (fillRefs.current[index] = el)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DragNDropPage;
