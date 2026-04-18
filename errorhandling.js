const promise = new Promise((resolve, reject) => {
  resolve(5);
});
promise
  .then(num => {
    console.log(num); 
    return num * 2;
  })
  .then(num => {
    console.log(num); 
    throw new Error("Error occurred");
  })
  .then(num => {
    console.log(num); 
  })
  .catch(err => {
    console.log(err.message); 
  });