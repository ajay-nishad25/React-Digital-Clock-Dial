import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Current Time</h1>
      <div className="clock">
        <div
          className="hour-hand"
          style={{ transform: `rotate(${time.getHours() * 30}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
        ></div>
        <div className="clock-center"></div>
      </div>
      <p className="time">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
