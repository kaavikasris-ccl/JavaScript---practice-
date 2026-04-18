const p1 = new Promise(res => setTimeout(() => res("P1"), 2000));
const p2 = new Promise(res => setTimeout(() => res("P2"), 1000));

Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log(err));