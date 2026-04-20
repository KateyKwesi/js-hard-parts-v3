function createFunc() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

console.log(createFunc(2));
