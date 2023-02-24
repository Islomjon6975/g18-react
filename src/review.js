let users = [
  {id: 1, name: 'Jack'},
  {id: 2, name: 'John'},
  {id: 3, name: 'Tom'},
]

function addUser(name) {
  const newUser = { id: users.length + 1, name: name }
  users = [...users, newUser]
}

addUser('Mark')
addUser('Alice')

function deleteUser(id) {
  users = users.filter(user => user.id !== id)
}

deleteUser(1)
// deleteUser(3)


function filterUsers(option, value) {
  users = users.filter(user => option === 'id' ? user[option]  === value : user[option].toLowerCase() === value.toLowerCase())
}

filterUsers('id', 1)

console.log(users)



































// const input = document.querySelector('#input')

// input.addEventListener('change', (e) => {
//   console.log(e.target.value)
// })



// function render(n1, n2, option) {
//   switch (option) {
//     case '+':
//       return n1 + n2;
//     case '-':
//       return n1 - n2;
//     case '*':
//       return n1 * n2;
//     case '/':
//       return n1 / n2;
    
//     default: return
//   }
// }

// console.log(render(2, 2, "/"))




// const obj = {
//   id: 1,
//   name: 'Jack',
//   surname: "Smith"
// }

// console.log(obj)

// const a = 'age'

// // obj.age = 30
// // obj['age'] = 31
// obj[a] = 31


// console.log(obj)
















// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   } 

//   getInfo() {
//     console.log(this.name, this.age)
//   }
// }

// class Student extends User {
//   constructor(name, age, status) {
//     super(name, age);
//     this.status = status
//   }

//   fullInfo() {
//     console.log(this.name, this.age, this.status)
//   }
// }

// // const user1 = new User('John', 20)
// // user1.getInfo()

// const student1 = new Student('Jack', 30, 'student')
// student1.getInfo()
// student1.fullInfo()