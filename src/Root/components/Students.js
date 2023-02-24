import React, { Component } from 'react'

let users = [
  {id: 1, name: 'Jack'},
  {id: 2, name: 'John'},
  {id: 3, name: 'Tom'},
]

class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: users,
      name: '',
    }
  }


  render() {
    const deleteUser = (id) => {
      const res = this.state.students.filter(student => student.id !== id)
      this.setState({students: res})
    }

    const onChange = (e) => {
      const { value, name } = e.target;
      this.setState({[name]: value})
    }

    const addUser = (name) => {
      const newUser = { id: this.state.students.length + 1, name: name }
      this.setState({students: [...this.state.students, newUser], name: ''})
    }

    console.log(this.state)

    return (
      <div>
        <h1>Students</h1>
        {
          this.state.students.map((student) => (
            <div key={student.id}>
              {student.id} - {student.name} - <button onClick={() => deleteUser(student.id)}>delete</button>
            </div>
          ))
        }
        <div>
          <input placeholder='Enter your name' value={this.state.name} type='text' onChange={onChange} name='name' /> 
          <button onClick={() => addUser(this.state.name)}>Add User</button>
        </div>
      </div>
    )
  }
}

export default  Students