function timeString(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
  
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
  
    return `${minutes}:${seconds}`;
  } //Display time in seconds as a string with mins and seconds

  export default timeString;