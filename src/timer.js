import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("waiting ⏳");

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    if (timer === 10) {
      setMessage("Game Over. 👾");
    }
  }, [timer]);

  function tick() {
    setTimer(prevTimer => prevTimer + 1);
  }

  console.log(timer);
  return (
    <div>
      <h3>{message}</h3>
      <h3>Timer: {timer}</h3>
    </div>
  );
}
