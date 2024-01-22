function addAndRemoveElements(commands) {
  let num = 1;
  const result = [];
  commands.forEach((cmd) => {
    if (cmd === "add") {
      result.push(num);
    } else {
      result.pop();
    }
    num++;
  });

  console.log(result.length > 0 ? result.join("\n") : "Empty");
}

addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
