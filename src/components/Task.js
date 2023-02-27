import React, { Component } from 'react'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option: '0%',
      width: '100',
      bg: 'blue'
    }
  }
  render() {
    return (
      <div>
        <h1>Task</h1>
        <select>
          <option value='0%'>Default</option>
          <option value='50%'>Circle</option>
        </select>
        <div style={{borderRadius: this.state.option ? this.state.option : null, width: `${this.state.width}px`, height: '100px', backgroundColor: this.state.bg}}></div>
      </div>
    )
  }
}
