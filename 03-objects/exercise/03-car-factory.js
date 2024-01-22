function carFactory(car) {
  let engine = { power: 90, volume: 1800 };

  if (car.power <= 90) {
    engine = { power: 90, volume: 1800 };
  } else if (car.power <= 120) {
    engine = { power: 120, volume: 2400 };
  } else {
    engine = { power: 200, volume: 3500 };
  }

  car.engine = engine;
  car.carriage = {
    type: car.carriage,
    color: car.color,
  };
  car.wheels = Array(4).fill(
    car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize
  );
  delete car.color;
  delete car.wheelsize;

  return car;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);

console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
