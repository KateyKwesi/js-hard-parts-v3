//If either side of the plus operator is a string, JavaScript automatically kicks off toString coercion instead of toNumber. This converts both operands to strings and performs string concatenation rather than mathematical addition.

const price = 7;
let quantity; // DOM gives us "3"
let donation; // DOM gives us "10"
let total;
function onSubmit() {
  total = +price * +quantity + +donation;
  // →7 * →3 + →10 = 31....... Add + to the operands to convert them to numnbers
}
onSubmit();
