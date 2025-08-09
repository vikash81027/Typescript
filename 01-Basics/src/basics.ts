function add(n1: number, n2: number, showResult: boolean) {
  // console.log(typeof n1);

  if (showResult) {
    return n1 * n2;
  } else return n1 + n2;
}

const num1 = 10;
let num2 = 11.1;

const printRessult = true;

console.log(add(num1, num2, true));
console.log(typeof num1);
