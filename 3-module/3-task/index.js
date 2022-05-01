function camelize(str) {
  let strArr = str.split('-');
  return strArr
    .map((item, itemIndex) => itemIndex === 0 ? item : item[0].toUpperCase() + item.slice(1))
    .join('');
}
