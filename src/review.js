function navbar(str, str2, str3='JS') {
  console.log('Navbar', str, str2, str3)
}

// navbar('HTML', 'CSS', 'React JS')
// navbar('HTML', 'CSS')
// navbar('HTML', 'CSS')
// navbar('HTML', 'CSS')
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

const { name: ism, surname: familiya, age: yosh, address: {country: davlat, district: tuman} } = user
// const age = user.age
// const name = user.name
// const country = user.address.country

console.log(ism, familiya, yosh, davlat, tuman);





















const users = ['HTML', 'CSS', 'JS', 'REACT JS', 'REDUX']

function userss(user) {
  console.log('User: ', user)
}

users.forEach((user) => {
  userss(user)
})