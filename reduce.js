const arr = [1, 2, 3, 4];

const sum = arr.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(sum);