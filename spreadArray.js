const number = [2, 4, 1, 9, 3, 5, 26, 7];
const number1 = [32, 45, 67];
console.log(Math.min(...number))

// console.log(...number);
const newArray = [125, 54, 456, 74, 5, 455, ...number1, 99];
// console.log(newArray);

// const x = 5;
// let y = x;
// y = 8
// console.log(x)
// console.log(y)

const array1 = [1, 2, 3, 4, 5];
const array2 = [...array1];

array1.push(99);
array2.push(50);

// console.log(array1);
// console.log(array2);

const arr = [1, 2, 3, 4, 5, 6, 7];
const [first, second,...remaining] = arr;
console.log(first, second);
console.log(remaining);