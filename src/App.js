import { useEffect, useState } from 'react';
import './App.css';
import LengthControls from './components/LengthControls';
import RunningControls from './components/RunningControls';
import TimerDisplay from './components/TimerDisplay';
import { DEFAULT_BREAK_LENGTH, DEFAULT_SESSION_LENGTH } from './constants/TIME_VALUES';
import animateButton from './utils/animateButton';


function App() {
  const [time, setTime] = useState(DEFAULT_SESSION_LENGTH);
  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK_LENGTH);
  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION_LENGTH);
  const [running, setRunning] = useState(false);
  const [onSession, setOnSession] = useState(true);
  const [intervalId, setIntervalId] = useState("");

  useEffect(() => {
    if (time < 1) {
      if (onSession) {
        setTime(breakLength);
        setOnSession(false);
      }
      else {
        setTime(sessionLength);
        setOnSession(true);
      }

      document.getElementById("beep").play();

    }
  }, [time, onSession, breakLength, sessionLength]);

  const runTimer = () => {
    setTime(time => time - 1);
  }

  const startStop = () => {
    if (!running) {
      setRunning(true);
      setIntervalId(setInterval(runTimer, 1000));
    } else {
      clearInterval(intervalId);
      setIntervalId("");

      setRunning(false);
    }

    animateButton("start_stop", "green");
  }

  const reset = () => {
    if (!running) {
      clearInterval(intervalId);
      setIntervalId("");

      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;

      setTime(DEFAULT_SESSION_LENGTH);
      setBreakLength(DEFAULT_BREAK_LENGTH);
      setSessionLength(DEFAULT_SESSION_LENGTH);
      setRunning(false);
      setOnSession(true);

      animateButton("reset", "green");
    }
    else {
      animateButton("reset", "red");
    }
  }

  const sessionIncrement = () => {
    if (!running) {
      let newTime = Math.min(sessionLength + 60, 3600);

      setTime(() => newTime);
      setSessionLength(() => newTime);

      animateButton("session-increment", "green");
    }
    else
      animateButton("session-increment", "red");
  }

  const sessionDecrement = () => {
    if (!running) {
      let newTime = Math.max(sessionLength - 60, 60);

      setTime(() => newTime);
      setSessionLength(() => newTime);

      animateButton("session-decrement", "green");
    }
    else
      animateButton("session-decrement", "red");
  }

  const breakIncrement = () => {
    if (!running) {
      let newTime = Math.min(breakLength + 60, 3600);

      setBreakLength(() => newTime);

      animateButton("break-increment", "green");
    }
    else
      animateButton("break-increment", "red");
  }

  const breakDecrement = () => {
    if (!running) {
      let newTime = Math.max(breakLength - 60, 60);

      setBreakLength(() => newTime);

      animateButton("break-decrement", "green");
    }
    else
      animateButton("break-decrement", "red");
  }


  return (
    <div id="mainWrapper">
      <TimerDisplay time={time} onSession={onSession} />
      <RunningControls startStop={startStop} reset={reset} />
      <LengthControls name={"session"} length={sessionLength} incMethod={sessionIncrement} decMethod={sessionDecrement} />
      <LengthControls name={"break"} length={breakLength} incMethod={breakIncrement} decMethod={breakDecrement} />
    </div>
  );
}

export default App;
