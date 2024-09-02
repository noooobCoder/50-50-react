import React, { useState, useEffect, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./styles.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
    return parsedTodos.map((todo) => ({
      ...todo,
      nodeRef: createRef(),
    }));
  });

  const [content, setContent] = useState("");

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
    if (content) {
      setTodos([
        ...todos,
        { id: Date.now(), complete: false, content, nodeRef: createRef() },
      ]);
      setContent("");
    }
  };

  useEffect(() => {
    const todosWithoutRefs = todos.map(({ nodeRef, ...rest }) => rest);
    localStorage.setItem("todos", JSON.stringify(todosWithoutRefs));
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <TransitionGroup component="ul" className={styles.todos}>
          {todos.map((todo) => (
            <CSSTransition
              key={todo.id}
              nodeRef={todo.nodeRef}
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
                ref={todo.nodeRef}
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
