const numbers = [1, ,2, 3, 4, 5];
const sum = numbers.reduce((previous, current)=> {
  return previous + current;
},0);

const multi = numbers.reduce((previous, current)=> {
  return previous * current;
},1);
console.log(multi)