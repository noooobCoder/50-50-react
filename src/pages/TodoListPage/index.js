import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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

  const getNextId = () => {
    // 从 localStorage 中读取当前的 ID
    let currentId = localStorage.getItem("currentId");

    // 如果不存在，则初始化为 0
    if (currentId === null) {
      currentId = 0;
    } else {
      currentId = parseInt(currentId, 10);
    }

    // 更新 ID 并保存到 localStorage
    const nextId = currentId + 1;
    localStorage.setItem("currentId", nextId);

    return currentId;
  };

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
      setCurrentTodo({ id: getNextId(), complete: false, content: "" });
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
        <TransitionGroup component="ul" className={styles.todos}>
          {todos.map((todo) => (
            <CSSTransition
              key={todo.id}
              timeout={1000}
              classNames={{
                enter: styles.todoEnter,
                enterActive: styles.todoEnterActive,
                exit: todo.complete
                  ? styles.todoExitRight
                  : styles.todoExitLeft,
                exitActive: todo.complete
                  ? styles.todoExitRightActive
                  : styles.todoExitLeftActive,
              }}
            >
              <li
                className={`${styles.todo} ${
                  todo.complete ? styles.complete : ""
                }`}
                onClick={() => handleClick(todo)}
                onContextMenu={(e) => handleRightClick(e, todo)}
              >
                {todo.content}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
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
