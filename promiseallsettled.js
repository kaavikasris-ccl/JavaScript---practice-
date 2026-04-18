const p1 = Promise.resolve(10);
const p2 = Promise.reject(20);
const p3 = Promise.resolve(30);

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
  });