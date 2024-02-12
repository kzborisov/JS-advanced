function solve() {
  const [textAreaGenerate, textAreaBuy] = document.querySelectorAll("textarea");
  const [btnGenerate, btnBuy] = document.querySelectorAll("button");
  const tableBody = document.querySelector(".table tbody");

  btnGenerate.addEventListener("click", () => {
    const furniture = JSON.parse(textAreaGenerate.value);
    for (item of furniture) {
      const row = document.createElement("tr");

      // Img
      const tdImg = document.createElement("td");
      const img = document.createElement("img");
      img.src = item.img;
      tdImg.appendChild(img);
      row.appendChild(tdImg);

      // Name
      const tdName = document.createElement("td");
      const pName = document.createElement("p");
      pName.textContent = item.name;
      tdName.appendChild(pName);
      row.appendChild(tdName);

      // Price
      const tdPrice = document.createElement("td");
      const pPrice = document.createElement("p");
      pPrice.textContent = item.price;
      tdPrice.appendChild(pPrice);
      row.appendChild(tdPrice);

      // Decoration factor
      const tdDecFactor = document.createElement("td");
      const pDecFactor = document.createElement("p");
      pDecFactor.textContent = item.decFactor;
      tdDecFactor.appendChild(pDecFactor);
      row.appendChild(tdDecFactor);

      // CheckBox
      const tdCheck = document.createElement("td");
      const input = document.createElement("input");
      input.type = "checkbox";
      tdCheck.appendChild(input);
      row.appendChild(tdCheck);

      tableBody.appendChild(row);
    }
    textAreaGenerate.value = "";
  });

  btnBuy.addEventListener("click", () => {
    const checkedInputs = document.querySelectorAll(
      '[type="checkbox"]:checked'
    );
    const rows = [];
    for (input of checkedInputs) {
      rows.push(input.parentNode.parentNode);
    }
    const totalPrice = rows.reduce((acc, curr) => {
      return acc + Number(curr.children[2].textContent);
    }, 0);
    const items = rows.map((item) => item.children[1].textContent);
    const averageDecFactor =
      rows.reduce(
        (acc, current) => acc + Number(current.children[3].textContent),
        0
      ) / rows.length;

    const resultStr = `Bought furniture: ${items.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${averageDecFactor}`;

    textAreaBuy.value = resultStr;
  });
}
