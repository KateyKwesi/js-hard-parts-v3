// js will kick off the toNumber coercion on relational operators before perfoming operations.

const price = 7;
let quantity; // DOM gives us "3"
const max = 10;
let total;
function onSubmit() {
  total = price * quantity;
  if (quantity < max) // →3 < 10 (true)
  {
    console.log("All good!");
  }
}
onSubmit();
