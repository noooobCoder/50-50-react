import React, { useState } from "react";
import { marked } from "marked";
import styles from "../pages/NotesAppPage/styles.module.css";

const Note = ({ text, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    onUpdate(newText);
  };

  return (
    <div className={styles.note}>
      <div className={styles.tools}>
        <button
          className={styles.edit}
          onClick={() => setIsEditing(!isEditing)}
        >
          <i className={`${styles.icon} fas fa-edit`}></i>
        </button>
        <button className={styles.delete} onClick={onDelete}>
          <i className={`${styles.icon} fas fa-trash-alt`}></i>
        </button>
      </div>
      {!isEditing ? (
        <div
          className={styles.main}
          onDoubleClick={() => setIsEditing(!isEditing)}
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      ) : (
        <textarea
          className={styles.text}
          value={text}
          onChange={handleTextChange}
        ></textarea>
      )}
    </div>
  );
};

export default Note;
