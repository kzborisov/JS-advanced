function encodeAndDecodeMessages() {
  const containers = document.querySelectorAll("#main div");

  for (container of containers) {
    const [_, textArea, btn] = container.children;

    btn.addEventListener("click", () => {
      console.log(textArea);
      if (btn.textContent === "Encode and send it") {
        const encodedStr = encode(textArea.value);
        textArea.value = "";
        containers[1].children[1].value = encodedStr;
      } else {
        const decodedStr = decode(textArea.value);
        textArea.value = decodedStr;
      }
    });
  }

  function encode(msg) {
    let encodedStr = "";
    for (char of msg) {
      encodedStr += String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return encodedStr;
  }

  function decode(msg) {
    let decodedStr = "";
    for (char of msg) {
      decodedStr += String.fromCharCode(char.charCodeAt(0) - 1);
    }
    return decodedStr;
  }
}
