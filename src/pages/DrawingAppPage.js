import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/DrawingAppPage.module.css";

const DrawingAppPage = () => {
  const canvasRef = useRef(null);
  const [x, setX] = useState(undefined);
  const [y, setY] = useState(undefined);
  const [size, setSize] = useState(1);
  const [color, setColor] = useState("#000000");
  const [isDrawing, setIsDrawing] = useState(false);

  const handleSizeDecrease = () => {
    if (size - 5 < 1) return;
    setSize(size - 5);
  };

  const handleSizeIncrease = () => {
    if (size + 5 > 50) return;
    setSize(size + 5);
  };

  const handleSizeChange = (e) => {
    if (e.target.value < 1 || e.target.value > 50) return;
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseDown = (e) => {
      setIsDrawing(true);
      setX(e.offsetX);
      setY(e.offsetY);
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
      setX(undefined);
      setY(undefined);
    };

    const handleMouseMove = (e) => {
      if (isDrawing) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(ctx, x2, y2);
        drawLine(ctx, x, y, x2, y2);
        setX(x2);
        setY(y2);
      }
    };

    const drawCircle = (ctx, x, y) => {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const drawLine = (ctx, x1, y1, x2, y2) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2 * size;
      ctx.stroke();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDrawing, x, y, size, color]);
  return (
    <div className={styles.body}>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        width={800}
        height={650}
      ></canvas>
      <div className={styles.toolBox}>
        <button className={styles.button} onClick={handleSizeDecrease}>
          -
        </button>
        <input
          className={styles.size}
          type="number"
          value={size}
          onChange={handleSizeChange}
          min={1}
          max={50}
        />
        <button className={styles.button} onClick={handleSizeIncrease}>
          +
        </button>
        <input type="color" value={color} onChange={handleColorChange} />
        <button className={styles.button} onClick={handleClear}>
          X
        </button>
      </div>
    </div>
  );
};

export default DrawingAppPage;
