const userName = "Pratik";
let age = 20;
age = 19;
if (age < 20) {
    var isOld = true;
}
// bad practice tsc throws error but works on JS
// console.log(isOld);
const add = (num1, num2 = 1, num3 = 4) => num1 + num2 + num3;
console.log(add(1));
console.log(add(1, 2, 3));
const hobbies = ["Sports", "Games"];
const copyHobbies = [...hobbies];
copyHobbies.push(...hobbies);
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
const newAdd = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
};
console.log(newAdd(1, 2, 3));
export default newAdd;
