const students = [
  {name: 'Mahabub', email:'mahabub@gmail.com', avg: 56, fiftyPercent: true},
  {name: 'lank', email:'lank@gmail.com', avg: 57, fiftyPercent: false},
  {name: 'rinko', email:'rinko@gmail.com', avg: 42, fiftyPercent: false},
  {name: 'shanko', email:'shanko@gmail.com', avg: 52, fiftyPercent: true},
  {name: 'fanko', email:'fanko@gmail.com', avg: 32, fiftyPercent: false},
  {name: 'janko', email:'janko@gmail.com', avg: 37, fiftyPercent: true},
  {name: 'jankso', email:'jankso@gmail.com', avg: 57, fiftyPercent: true}
];

const scic = students.filter(s => s.avg >= 50 && s.fiftyPercent === true)
console.log(scic);

const names = students.map((st) => st.name)
console.log(names)