import { Fragment } from "react";
import timeString from "../utils/timeString";
import './TimerDisplay.css';

function TimerDisplay({onSession, time}) {

    return (
      <Fragment>
        <div id="timer-label">
          {onSession ? "On session" : "On break"}{" "}
        </div>
        <div id="time-left">{timeString(time)}</div>
      </Fragment>
    );
  }

  export default TimerDisplay;