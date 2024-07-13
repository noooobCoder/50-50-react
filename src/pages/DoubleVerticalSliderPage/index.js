import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const DoubleVerticalSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderContainerRef = useRef(null);
  const rightSlideRef = useRef(null);
  const leftSlideRef = useRef(null);

  const slidesLength = 4; // Assuming 4 slides, adjust accordingly

  useEffect(() => {
    leftSlideRef.current.style.top = `-${(slidesLength - 1) * 100}vh`;
  }, [slidesLength]);

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainerRef.current.clientHeight;
    if (direction === "up") {
      setActiveSlideIndex((prev) => (prev + 1) % slidesLength);
    } else if (direction === "down") {
      setActiveSlideIndex((prev) => (prev - 1 + slidesLength) % slidesLength);
    }

    rightSlideRef.current.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
    leftSlideRef.current.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;
  };

  useEffect(() => {
    const updateSlidePosition = () => {
      const sliderHeight = sliderContainerRef.current.clientHeight;
      rightSlideRef.current.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
      }px)`;
      leftSlideRef.current.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
      }px)`;
    };

    updateSlidePosition();

    const handleResize = () => {
      updateSlidePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSlideIndex]);

  const contents = [
    {
      id: 1,
      title: "ICE GROUND",
      description: '"oh, chilly and cold, but pure and clean..."',
      color: "#51829e",
      src: "images/04.JPG",
    },
    {
      id: 2,
      title: "MOUNTAIN & SKY CASTLES",
      description: '"majestic techniques, are these created by magic?"',
      color: "#63473d",
      src: "images/03.JPG",
    },
    {
      id: 3,
      title: "LAKE AND ISLANDS",
      description: '"a beautiful and mysterious place..."',
      color: "#f4d8a7",
      src: "images/02.JPG",
    },
    {
      id: 4,
      title: "GRASSLAND SUNSET",
      description: '"corvus corax are finding what?"',
      color: "#c0c3e1",
      src: "images/01.JPG",
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.sliderContainer} ref={sliderContainerRef}>
        <div className={styles.leftSlide} ref={leftSlideRef}>
          {contents.map((content) => (
            <div key={content.id} style={{ backgroundColor: content.color }}>
              <h1 className={styles.title}>{content.title}</h1>
              <p className={styles.description}>{content.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.rightSlide} ref={rightSlideRef}>
          {contents.map((content) => (
            <div
              key={content.id}
              style={{ backgroundImage: `url(${content.src})` }}
            ></div>
          ))}
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.up} onClick={() => changeSlide("up")}>
            <i className={`fas fa-arrow-up ${styles.upIcon}`}></i>
          </button>
          <button className={styles.down} onClick={() => changeSlide("down")}>
            <i className={`fas fa-arrow-down ${styles.downIcon}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleVerticalSlider;
