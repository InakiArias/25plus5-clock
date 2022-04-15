import { Fragment } from "react";

function RunningControls({ startStop, reset }) {

  return (
    <Fragment>
      <button id="start_stop" onClick={startStop}>
        <i className="fas fa-play"></i>
        <i className="fas fa-pause"></i>
      </button>
      <button id="reset" onClick={reset}>
        <i className="fas fa-sync-alt"></i>
      </button>
    </Fragment> 
  );
}

export default RunningControls;