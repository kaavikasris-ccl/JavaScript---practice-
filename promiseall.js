const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });