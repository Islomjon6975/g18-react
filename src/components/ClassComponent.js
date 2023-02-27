import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'Jack',
      language: 'en',
      year: null,
      yosh: null
    }
  }
  render() {

    const increment = () => {
      this.setState({ count: this.state.count + 1 })
    }

    const decrement = () => {
      this.setState({count: this.state.count - 1})
    }

    const incrementByTen = () => {
      this.setState({count: this.state.count + 10})
    }

    const onNameChange = (e) => {
      this.setState({name: e.target.value})
    }

    const onSelectChange = (e) => {
      this.setState({language: e.target.value})
    }

    const onChangeCheckBox = (e) => {
      console.log(e.target.checked)
    }

    const onYearChange = (e) => {
      this.setState({year: Number(e.target.value)})
    }
    
    const transfer = () => {
      console.log(typeof +this.state.year)
      const yosh = 2023 - this.state.year
      this.setState({yosh: yosh})
    }

    return(
      <div style={{flex: '1'}}>
        <h1>{this.props.title} Component</h1>
        <h2>Count: {this.state.count}  {this.state.name} </h2>
        <h2>Language: {this.state.language }</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementByTen}>+10</button> <br />
        <input type='text' onChange={onNameChange} placeholder="Type something" />

        <select onChange={onSelectChange}>
          <option value='en'>EN</option>
          <option value='ru'>RU</option>
          <option value='uzb'>UZB</option>
        </select>

        <input type='checkbox' onChange={onChangeCheckBox} />

        <div>
          <h1>Yoshni chiqarish dasturi</h1>
          <input type='number' onChange={onYearChange} />
          <button onClick={transfer}>Transfer</button>
          <h3>Year: {this.state.year}</h3>
          <h3>Yosh hozishingiz {this.state.yosh }</h3>
        </div>
      </div>
    )
  }
}

export default ClassComponent