const arr = [5, 2, 8, 1, 10, 3];

const max = arr.reduce(function(acc, curr) {
  return curr > acc ? curr : acc;
}, arr[0]);

console.log(max);