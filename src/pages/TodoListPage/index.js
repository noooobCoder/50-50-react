import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [currentTodo, setCurrentTodo] = useState({
    complete: false,
    content: "",
  });

  const handleClick = (cur) => {
    const newTodos = todos.map((todo) =>
      todo === cur ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(newTodos);
  };

  const handleRightClick = (e, cur) => {
    e.preventDefault();
    const newTodos = todos.filter((todo) => todo !== cur);
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodo.content) {
      setTodos([...todos, currentTodo]);
      setCurrentTodo({ complete: false, content: "" });
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>todos</h1>
      <form className={styles.form} id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          id="input"
          placeholder="Enter Your todo"
          autoComplete="off"
          value={currentTodo.content}
          onChange={(e) =>
            setCurrentTodo({ complete: false, content: e.target.value })
          }
        />
        <ul className={styles.todos}>
          {todos.map((todo, id) => (
            <li
              key={id}
              className={`${styles.todo} ${
                todo.complete ? styles.complete : ""
              }`}
              onClick={() => handleClick(todo)}
              onContextMenu={(e) => handleRightClick(e, todo)}
            >
              {todo.content}
            </li>
          ))}
        </ul>
      </form>
      <small className={styles.small}>
        Left Click to toggle Completed.
        <br />
        Right Click to delete todo
      </small>
    </div>
  );
};

export default TodoList;
