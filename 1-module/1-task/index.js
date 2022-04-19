function factorial(n) {
  // ваш код...
  let result = 1;
    if (n === 0 || n === 1) {
        return 1;
    }

    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
