function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "John";
  callback(name);
}

processUser(greet);