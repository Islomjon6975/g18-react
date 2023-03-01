import React, { Component } from 'react'
import { students } from '../utils/student';

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students, 
      option: 'name',
      selected: 'name',
      selectedUser: null,
    }
  }
  
  render() {
    // CRUD -> Create, Read, Update, Delete
    const onDelete = (studentId) => {
      let res = this.state.data.filter(student => student.id !== studentId) // for + if/else
      this.setState({...this.state, data: res})
    }

    const onChange = (e) => {
      const { value, name } = e.target
      this.setState({ ...this.state, [name]: value });
    }

    const onSelect = (e) => {
      const { value } = e.target
      this.setState({...this.state, selected: value})
    }

    const onSearch = (option) => {
      let res = students.filter(student => student[this.state.selected].toString().toLowerCase() === option.toLowerCase())
      this.setState({...this.state, data: res})
    }

    const onUpdate = (student) => {
      this.setState({...this.state, selectedUser: student})
    }

    const onChangeUpdate = (e) => {
      const { value, name } = e.target
      console.log(name, value)
      this.setState({ ...this.state, selectedUser: {...this.state.selectedUser, [name]: value} });
    }

    const onSave = () => {
      let res = this.state.data.map(student => student.id === this.state.selectedUser.id ? this.state.selectedUser : student)
      this.setState({...this.state, data:res, selectedUser: null})
    }

    console.log(this.state, 'state')

    return (
      <div>
        {/* <div>
          <input type='text' onChange={onChange} placeholder='Search...' name='option' />
          <select onChange={onSelect}>
            <option value='id'>Id</option>
            <option value='name' selected>Name</option>
            <option value='address'>Address</option>
          </select>
          <button onClick={() => onSearch(this.state.option)}>Seach</button>
        </div> */}
        <ul className='students'>
          {
            this.state.data.map(student => (
              <li key={student.id}>
                {student?.id} -
                {!this.state.selectedUser ? student?.name :  this.state.selectedUser.id === student.id ? <input onChange={onChangeUpdate} name='name' value={this.state.selectedUser.name} /> : student?.name} -
                <button onClick={() => onDelete(student.id)}>delete</button>
                {
                  this.state.selectedUser?.id !== student?.id
                  ?
                  <button onClick={() => onUpdate(student)}>update</button>
                  :
                  <button onClick={onSave}>Save</button>
                }
              </li>
            ))
          }
        </ul>

      </div>
    )
  }
}

export default Crud