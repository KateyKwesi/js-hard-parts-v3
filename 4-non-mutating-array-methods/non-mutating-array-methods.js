const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
arr1.reverse(); // [3, 2, 1]
arr1.splice(1, 1, 6); // replace 1 element at index 1 with 6 - [3, 6, 1]
arr1.sort(); // [1, 3, 6]
const reversed = arr2.toReversed();
const spliced = arr2.toSpliced(1, 1, 6);
const sorted = arr2.toSorted();
console.log(arr1);
// [1, 3, 6]
console.log(arr2, reversed, spliced, sorted);
// [1, 2, 3] [3, 2, 1] [1, 6, 3] [1, 2, 3]

const deepArr = [1, 2, [1, 2], 2];
const flattened = deepArr.flat(); // [1, 2, 1, 2, 2]
// Can set depth (even ‘Infinity’), defaults to 1
const last2 = flattened.findLastIndex((x) => x === 2);
// last 2 is at idx 4
function oddOrEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}
const grouped = Object.groupBy(flattened, oddOrEven);
// → { even: [2, 2, 2], odd: [1, 1] }
// Popular SQL statement
