const person = {
  name: 'Abul',
  age: 45,
  contact: {
    phone: '54564546564',
    email: 'ab@gmail.com',
  },
  education: {
    schoolName: "Netrokona School",
    subjects: [
      {name: 'bangla', marks: 45},
      {name: 'englihs', marks: 65},
      {name: 'math', marks: 75}
    ]
  }
};

const education = person.education.subjects[1].marks;
console.log(education)

// const contact = person.contact.phone;
// const age = person['age'] 
// const property = 'age';

// const age = person[property];
// console.log(age)

// const propertys = person.education['schoolName'];
// const schoolName =[propertys];
// console.log(schoolName);

