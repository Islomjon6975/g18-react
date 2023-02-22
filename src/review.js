
const name = 'Jack'

function render() {
  console.log('hi')
}


render()






























class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 

  getInfo() {
    console.log(this.name, this.age)
  }
}

class Student extends User {
  constructor(name, age, status) {
    super(name, age);
    this.status = status
  }

  fullInfo() {
    console.log(this.name, this.age, this.status)
  }
}

// const user1 = new User('John', 20)
// user1.getInfo()

// const student1 = new Student('Jack', 30, 'student')
// student1.getInfo()
// student1.fullInfo()