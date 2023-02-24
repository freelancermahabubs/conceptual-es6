const polapain = [
  {name: "Abul", job: "sorkari", salary: 17000},
  {name: "sabul", job: "besorkari", salary: 25000},
  {name: "nabul", job: "sorkari", salary: 21000},
  {name: "ebul", job: "besorkari", salary: 47000},
  {name: "tabul", job: "sorkari", salary: 23000},
  {name: "babul", job: "besorkari", salary: 55000},
];

const jamais = polapain.filter(jamai => (jamai.job === 'sorkari' && jamai.salary >= 20000) || (jamai.job === "besorkari" && jamai.salary >= 40000));
console.log(jamais);