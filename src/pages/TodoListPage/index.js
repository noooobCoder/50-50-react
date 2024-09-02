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
        { id: Date.now(), complete: false, content, nodeRef: createRef(null) },
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
                // exitActive: todo.complete
                //   ? styles.todoExitRightActive
                //   : styles.todoExitLeftActive,
              }}
              onExiting={() => {
                if (todo.nodeRef.current) {
                  const element = todo.nodeRef.current;

                  const height = element.offsetHeight;

                  console.log(height);

                  const animationOptions = {
                    duration: 1000,
                    easing: "ease",
                    fill: "forwards",
                  };

                  const animationKeyframes = [
                    {
                      opacity: 1,
                      transform: "translateX(0)",
                      height: `${height}px`,
                    },
                    {
                      opacity: 0,
                      transform: todo.complete
                        ? "translateX(100%)"
                        : "translateX(-100%)",
                      height: `${height}px`,
                    },
                    {
                      opacity: 0,
                      transform: todo.complete
                        ? "translateX(100%)"
                        : "translateX(-100%)",
                      height: "0",
                      padding: "0",
                    },
                  ];

                  element.animate(animationKeyframes, animationOptions);
                }
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
