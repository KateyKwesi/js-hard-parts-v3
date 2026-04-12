//Thread of execution - Goes through code line-by-line and runs/executes each line
//When we run an overall file of code, it had two parts, thread of execution and memory. When we run a function , we got to create those two again.

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
