function dayOfWeek(day) {
  const daysMap = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  return daysMap[day] ? daysMap[day] : "error";
}

console.log(dayOfWeek("Invalid"));
console.log(dayOfWeek("Monday"));
console.log(dayOfWeek("Tuesday"));
