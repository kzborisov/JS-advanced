function roadRadar(speed, area) {
  const speedMap = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  const speedResult = speed > speedMap[area] ? speedMap[area] - speed : speed;
  let result;
  if (speedResult < 0) {
    const difference = Math.abs(speedResult);
    result = `The speed is ${difference} km/h faster than the allowed speed of ${speedMap[area]}`;
    if (difference > 40) {
      result += " - reckless driving";
    } else if (difference > 20) {
      result += " - excessive speeding";
    } else {
      result += " - speeding";
    }
  } else {
    result = `Driving ${speedResult} km/h in a ${speedMap[area]} zone`;
  }

  console.log(result);
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
