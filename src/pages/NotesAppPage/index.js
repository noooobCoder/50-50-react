import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Note from "../../components/Note";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNewNote = (text = "") => {
    setNotes([...notes, text]);
  };

  const updateNote = (index, newText) => {
    const updatedNotes = notes.map((note, i) => (i === index ? newText : note));
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    console.log(updatedNotes);
    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={styles.body}>
      <div className={styles.banner}>
        <p>
          Notes support Markdown ! Try Refreshing the Page Notes will remain
          there..
        </p>
      </div>
      {notes.map((note, index) => {
        console.log("note: ", note);
        console.log("index: ", index);
        return (
          <Note
            key={index}
            text={note}
            onDelete={() => {
              console.log(index);
              deleteNote(index);
            }}
            onUpdate={(newText) => updateNote(index, newText)}
          />
        );
      })}
      <button
        className={`${styles.note} ${styles.add}`}
        onClick={() => addNewNote()}
      >
        <i className={`${styles.icon} fas fa-plus`}></i>
      </button>
    </div>
  );
};

export default NotesApp;
