function ucFirst(str) {
  let firstLetter = str.slice(0, 1);
  let otherLetters = str.slice(1);

  return firstLetter.toUpperCase().concat(otherLetters);
}
