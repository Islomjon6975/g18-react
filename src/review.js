function navbar(str, str2) {
  console.log('Navbar', str, str2)
}

// navbar('HTML', 'CSS')
// navbar('CSS')
// navbar('JS')

let name = 'John'

let user = {
  name: 'Jack',
  surname: "Smith",
  age: 20,
  address: {
    country: 'UK',
    district: 'Lodon'
  }
}

const { name: ism, surname: familiya, age: yosh, address: {country, district} } = user
// const age = user.age
// const name = user.name
// const country = user.address.country

// console.log(ism, familiya, yosh, country, district);



const users = ['HTML', 'CSS', 'JS', 'REACT JS', 'REDUX']

function userss(user) {
  console.log('User: ', user)
}

users.forEach((user) => {
  userss(user)
})