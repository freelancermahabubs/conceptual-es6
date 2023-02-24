const students = [
  {
      student1: {
          name: 'abul',
          age: '17',
          isMale: true,
          education: {
              class: 7,
              subjects: ['bangla', 'english', 'math'],
              school: 'durgapur high school',
          }
      },
      student2: {
          name: 'jarina',
          age: '19',
          isMale: false,
          education: {
              class: 6,
              subjects: ['bangla', 'english', 'math'],
              school: 'Rajshahi high school',
          }
      },
      student3: {
          name: 'habul',
          age: '15',
          isMale: true,
          education: {
              class: 9,
              subjects: ['bangla', 'english', 'math'],
              school: 'Dhaka high school',
          }
      }
  }
]

students.map(student => {
  for(let i in student){
    console.log(students)
  }
})

students.map(student => {
    for(let i in student){
        // console.log(student[i])
        const {name, age, isMale, education} = student[i]
        const {subjects} = education;

        const information = `
        My Name is: ${name}
        My Age is: ${age}
        My gender is: ${isMale === true? 'Male' : 'Female'}
        My Subjects are: ${subjects.map(s => s)}
        `;
        console.log(information)
    }
    
})
