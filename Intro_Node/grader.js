function average(arr) {
  var sum = arr.reduce((a, b) => a+b, 0);
  console.log(Math.round(sum / arr.length));
}

average([90.3, 98.2, 89, 100, 100, 86, 94]);