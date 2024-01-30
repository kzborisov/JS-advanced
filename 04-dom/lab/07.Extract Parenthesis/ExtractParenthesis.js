function extract(content) {
  const text = document.getElementById(content);
  const re = /\(([a-zA-Z0-9\s]*)\)/gm;
  const matches = Array.from(text.textContent.matchAll(re)).map(
    (groups) => groups[1]
  );

  return matches.join("; ");
}
