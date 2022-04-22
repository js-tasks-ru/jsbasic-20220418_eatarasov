function truncate(str, maxlength) {
  let strLength = str.length;
  if (strLength > maxlength) {
    let newString = str.slice(0, maxlength - 1);
    return newString.concat('…');
  } else {
    return str;
  }
}
