import { useEffect, useState, useRef } from "react";

export const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");

  const [timerHours, setTimerHours] = useState("00");

  const [timerMinutes, setTimerMinutes] = useState("00");

  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const timer = () => {
    const countdownDate = new Date("March 23, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    timer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="countdown-container">
        <section style={{ borderRight: "1px solid #bf9060" }}>
          <p>{timerDays}</p>
          <p>
            {" "}
            <small>Días</small>{" "}
          </p>
        </section>
        <section style={{ borderRight: "1px solid #bf9060" }}>
          <p>{timerHours}</p>
          <p>
            {" "}
            <small>Hrs</small>{" "}
          </p>
        </section>
        <section style={{ borderRight: "1px solid #bf9060" }}>
          <p>{timerMinutes}</p>
          <p>
            {" "}
            <small>Min</small>{" "}
          </p>
        </section>
        <section>
          <p>{timerSeconds}</p>
          <p>
            {" "}
            <small>Segs</small>{" "}
          </p>
        </section>
      </div>
    </>
  );
};
