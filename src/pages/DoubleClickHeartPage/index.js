import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

const DoubleClickHeart = () => {
  // const [times, setTimes] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
  // const [current, setCurrent] = useState(0);
  const [heartPosition, setHeartPosition] = useState({
    top: 0,
    left: 0,
  });

  const slideRef = useRef(null);

  const slideLength = 4;

  useEffect(() => {
    slideRef.current.style.left = `-${(slideLength - 1) * 80}vw`;
  }, [slideLength]);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setActiveSlideIndex((prev) => (prev - 1 + slideLength) % slideLength);
    } else if (direction === "right") {
      setActiveSlideIndex((prev) => (prev + 1) % slideLength);
    }

    slideRef.current.style.transform = `translateX(-${
      activeSlideIndex * 80
    }vw)`;
  };

  useEffect(() => {
    const updateSlidePosition = () => {
      slideRef.current.style.transform = `translateX(-${
        activeSlideIndex * 80
      }vw)`;
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

  const [imgItems, setImgItems] = useState([
    { id: 0, url: "images/01.JPG", likes: 0 },
    { id: 1, url: "images/02.JPG", likes: 0 },
    { id: 2, url: "images/03.JPG", likes: 0 },
    { id: 3, url: "images/04.JPG", likes: 0 },
  ]);

  // const handleClickLeft = () => {
  //   setCurrent((prev) => (prev + imgItems.length - 1) % imgItems.length);
  // };

  // const handleClickRight = () => {
  //   setCurrent((prev) => (prev + 1) % imgItems.length);
  // };

  const handleDoubleClick = (activeSlideIndex, event) => {
    const { clientX, clientY } = event;
    const { top, left } = event.target.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setHeartPosition({
      top: y,
      left: `calc(${x}px + ${activeSlideIndex * 80}vw)`,
    });

    setShowHeart(true);

    setImgItems((prev) => {
      const newImgItems = [...prev];
      newImgItems[activeSlideIndex].likes++;
      return newImgItems;
    });

    setTimeout(() => {
      setShowHeart(false);
    }, 650);
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>
        Double Click on the image to{" "}
        <i className={`${styles.icon} fas fa-heart`}></i> it
      </h1>
      <small>You liked it {imgItems[activeSlideIndex].likes} times</small>
      <div className={styles.wrapper}>
        <div className={styles.shadow}></div>
        <div className={styles.container}>
          <div className={styles.slideContainer} ref={slideRef}>
            {imgItems.map((imgItem) => (
              <div
                key={imgItem.id}
                className={styles.loveMe}
                onDoubleClick={(event) =>
                  handleDoubleClick(activeSlideIndex, event)
                }
                style={{
                  backgroundImage: `url(${imgItem.url})`,
                }}
              >
                {showHeart ? (
                  <i
                    style={heartPosition}
                    className={`${styles.icon} fas fa-heart`}
                  ></i>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div
        className={styles.loveMe}
        onDoubleClick={handleDoubleClick}
        style={{
          backgroundImage: `url(${imgItems[current].url})`,
        }}
      >
        {showHeart ? (
          <i
            style={heartPosition}
            className={`${styles.icon} fas fa-heart`}
          ></i>
        ) : null}
      </div> */}

      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={() => changeSlide("left")}
        onDoubleClick={(event) => event.stopPropagation()}
      >
        <i className={`fas fa-arrow-left ${styles.arrow}`}></i>
      </button>
      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={() => changeSlide("right")}
        onDoubleClick={(event) => event.stopPropagation()}
      >
        <i className={`fas fa-arrow-right ${styles.arrow}`}></i>
      </button>
    </div>
  );
};

export default DoubleClickHeart;
