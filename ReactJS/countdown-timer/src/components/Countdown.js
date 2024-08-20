import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timer, setTimer] = useState(10);   

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(intervalId);
          alert("Time's up!");
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Time left: {timer} seconds</p>
    </div>
  );
};

export default Countdown;
