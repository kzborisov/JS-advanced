function timeToWalk(steps, footprint, speed) {
  function addLeadingZero(num) {
    return (num < 10 ? "0" : "") + num;
  }
  const distance = (steps * footprint) / 1000; // kilometers
  const time = distance / speed; // hours
  const bonusTime = Math.floor(distance / 0.5) * 60; // seconds;
  const totalSeconds = time * 60 * 60 + bonusTime;

  let hours = addLeadingZero(Math.floor(totalSeconds / 3600));
  let minutes = addLeadingZero(Math.floor(totalSeconds / 60));
  let seconds = addLeadingZero(
    Math.round(totalSeconds - hours * 3600 - minutes * 60)
  );

  console.log(hours + ":" + minutes + ":" + seconds);
}

timeToWalk(4000, 0.6, 5);
