function fibonacci(n) {
  if (n <= 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else if (n <= 20) {
    let arr = fibonacci(n - 1);
    let prevSum = arr[n - 1] + arr[n - 2];
    return arr.concat(prevSum);
  } else {
    return "Out of range.";
  }
}
