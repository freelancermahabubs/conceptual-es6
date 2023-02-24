// class student  {
// name = "Mahabub";
// roll = 12;
// }
// const student1 = new student();
// console.log(student1.name);

class student {
  name;
  roll;
  constructor(name, roll){
    this.name = name;
    this.roll = roll
  }
  showDetails(){
    console.log(`My name is ${this.name} my roll is ${this.roll}`)
  }
}
const student1 = new student("mahabub", 12);
student1.showDetails();
const student2 = new student("hasan", 14);
student2.showDetails();