function sumSalary(salaries) {
  let sum = 0;
  for (let i of Object.values(salaries)) {
    if (typeof i === "number" && isFinite(i)) {
      sum += i;
    }
  }
  return sum;
}
