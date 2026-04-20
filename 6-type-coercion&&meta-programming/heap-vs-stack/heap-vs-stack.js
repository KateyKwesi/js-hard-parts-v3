/*
STACK vs HEAP + PRIMITIVES vs OBJECTS

Primitives (number, string, boolean, null, undefined, symbol, bigint)
→ Stored directly (by value)
→ Variable holds the actual value
→ Easy to compare

Example:
let a = 7;
let b = a; // copy of value
b = 10;
// a is still 7

--------------------------------------------------

Objects (object, array, function)
→ Stored in heap (separate memory)
→ Variable holds a reference (address) to the data
→ NOT the actual data

Example:
let user = { name: "Kwesi" };

Memory idea:
STACK                HEAP
user  ----------->   { name: "Kwesi" }

--------------------------------------------------

Copying objects:

let user1 = { name: "Kwesi" };
let user2 = user1; // copies reference

user2.name = "Kofi";

Both now point to same object:
user1.name === "Kofi" // true

--------------------------------------------------

Comparing objects:

{ name: "Kwesi" } === { name: "Kwesi" } // false

Reason:
→ Different references (different memory locations)
→ JS compares reference, not content

--------------------------------------------------

Key takeaway:

- Primitives → stored & compared by value
- Objects → stored in heap, accessed & compared by reference
*/
