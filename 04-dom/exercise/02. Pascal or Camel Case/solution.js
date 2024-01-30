function solve() {
  let allsmall = document.getElementById("text").value.toLowerCase();
  let conv = document.getElementById("naming-convention").value;
  let words = allsmall.split(" ");
  let result = "";

  if (conv === "Camel Case") {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    result = words.join("");
  } else if (conv === "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    result = words.join("");
  } else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}
