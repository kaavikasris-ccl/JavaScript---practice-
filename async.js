async function test() {
  return "Hello";
}

async function run() {
  const result = await test();
  console.log(result);
}

run();