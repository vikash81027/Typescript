function add1(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): undefined {
  console.log("Result " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
}

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;
combinedValues = add1;

printResult(add1(2, 3));

addAndHandle(10, 12, (res) => {
  console.log(res);
});
