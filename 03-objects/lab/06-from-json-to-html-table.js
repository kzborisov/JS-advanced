function convertToHtmlTable(input) {
  const data = JSON.parse(input);
  const table = ["<table>"];
  const keys = [];

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  for (const element of data) {
    for (const key in element) {
      if (keys.indexOf(key) === -1) {
        keys.push(key);
      }
    }
  }

  //   Create Header
  table.push("<tr>");
  keys.forEach((key) => table.push(`<th>${escapeHtml(key)}</th>`));
  table.push("</tr>");

  // Create body
  data.forEach((row) => {
    table.push("<tr>");
    for (const key in row) {
      table.push(`<td>${escapeHtml(row[key])}</td>`);
    }
    table.push("</tr>");
  });
  table.push("</table>");

  console.log(table.join(""));
  return table.join("\n");
}

convertToHtmlTable(
  `[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]`
);

console.log("-------------------");
convertToHtmlTable(
  `[
    {"Name":"Pesho", "Score":4, " Grade":8},
    {"Name":"Gosho","Score":5," Grade":8},
    {"Name":"Angel","Score":5.50," Grade":10}
]`
);
