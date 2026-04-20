const user = {
  name: "Kaavika",
  age: 21,

  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

user.greet();