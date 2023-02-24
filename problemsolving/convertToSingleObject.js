const persons = [
  {id: 'ID01', name: "Mahabub Bhai", age: 23},
  {id: 'ID02', name: "Abul Bhai", age: 22},
  {id: 'ID03', name: "Sabul Bhai", age: 43},
  {id: 'ID04', name: "Ebul Bhai", age: 54},
  {id: 'ID05', name: "Nabul Bhai", age: 29},
];

const info = {};
persons.map(p => {
  const id = p.id;
  const value = p.name;

  info[id] = value 
})
console.log(info.ID02);

const a = {
  name: "mahaub",
  age: 47,
  address: 'Netrokona'
};

for(let i in a){
  console.log(a[i])
}