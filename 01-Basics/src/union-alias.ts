type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let res: Combinable;
  if (typeof input1 === "number" && typeof input2 === "number") {
    res = input1 + input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  return res;
}

const combinedAges = combine(12, 13);
console.log(combinedAges);

const combinedNames = combine("Pratik", "Rout");
console.log(combinedNames);
