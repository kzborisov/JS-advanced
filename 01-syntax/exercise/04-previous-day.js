function previousDay(year, month, day) {
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() - 1);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

console.log(previousDay(2016, 9, 30));
