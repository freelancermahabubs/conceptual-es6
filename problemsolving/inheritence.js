class Person{
  name;
  age;
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  showName(){
    console.log(`My Name is ${this.name}`)
  }
}

class Student extends Person{
  subject;
  roll;
  constructor(name, age, subject, roll){
    super(name, age)
    this.subject = subject;
    this.roll = roll;
  }
  showDetails(){
    console.log(this.name, this.age, this.subject, this.roll)
  }
};

class Teacher extends Person{
  faculty;
  designation
  constructor(name, age, faculty, designation){
   super(name, age)
    this.faculty = faculty;
    this.designation = designation;
  }
  showDetails(){
    console.log(this.name, this.age, this.faculty, this.designation)
  }
}

const st = new Student("Mahabub", 21, "CSE", 23511);
const th = new Teacher("Jibon", 14, "EEE", "LECTURER")
st.showDetails()
th.showDetails()