const person = {
  name: "Mahabub",
  age: 21,
  phone: "014521222",
  address: 'Bari nai',
  p: [12, 78, 554, 41]
};

// const name = person.name;
// const age = person.age;
// const bari = person.address;
// console.log(name, age, bari);

// const {name, age:boyos, address:bari,...badbaki} = person;
// console.log(badbaki);
// console.log(name, boyos, bari);

const person2 = {...person};
person2.isMale = true;
console.log(person);

const {p} = person;
console.log(p);
const [number] = p;
console.log(number);