function wordsUppercase(sentence) {
  let result = sentence.match(/[A-Za-z0-9]+/gi);

  result.forEach((item, index) => {
    result[index] = item.toUpperCase();
  });
  console.log(result.join(", "));
}

wordsUppercase("Hi, how are you?");
