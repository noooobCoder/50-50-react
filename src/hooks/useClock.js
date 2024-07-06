import { useState, useEffect, useRef } from "react";

const useClock = () => {
  const secondRef = useRef(0);
  const [time, setTime] = useState(new Date());

  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const hourForClock = hour % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const ampm = hour < 12 ? "AM" : "PM";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(new Date());
  //   }, 100);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  useEffect(() => {
    let animationFrameId;
    const animateClock = () => {
      setTime(new Date());
      animationFrameId = requestAnimationFrame(animateClock);
    };
    animateClock();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (secondRef.current === 0) {
      secondRef.current = second; // 更新 useRef 的值为当前的 second
    }
  }, [second]);

  return {
    day: days[day],
    month: months[month],
    date: date,
    hour: hourForClock,
    minute: minute,
    second: second,
    hourScale: scale(hourForClock, 0, 12, 0, 360),
    minuteScale: scale(minute, 0, 60, 0, 360),
    // secondScale: scale(second, 0, 60, 0, 360),
    ampm: ampm,
    originSecondScale: scale(secondRef.current, 0, 60, 0, 360),
  };
};

export default useClock;
