function show() {
  console.log(this.name);
}

globalThis.name = "JavaScript";

show();