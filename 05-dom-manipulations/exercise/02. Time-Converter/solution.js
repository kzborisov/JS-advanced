function attachEventsListeners() {
  const divs = Array.from(document.querySelectorAll("div"));

  const converter = {
    seconds: function (time) {
      return time;
    },
    minutes: function (time) {
      return time * 60;
    },
    hours: function (time) {
      return time * 60 * 60;
    },
    days: function (time) {
      return time * 60 * 60 * 24;
    },
  };

  for (let div of divs) {
    const [_, input, button] = div.children;
    button.addEventListener("click", (e) => handleClick(e, input));
  }

  function handleClick(e, input) {
    const timeFormat = input.id;
    const time = Number(input.value);
    const totalSeconds = converter[timeFormat](time);

    for (const div of divs) {
      const i = div.children[1];
      if (i.id === "days") {
        i.value = totalSeconds / 60 / 60 / 24;
      } else if (i.id === "hours") {
        i.value = totalSeconds / 60 / 60;
      } else if (i.id === "minutes") {
        i.value = totalSeconds / 60;
      } else if (i.id === "seconds") {
        i.value = totalSeconds;
      }
    }
  }
}
