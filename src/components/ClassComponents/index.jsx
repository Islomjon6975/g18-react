import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Jack",
      lastName: "Smith",
      age: 30,
    };
  }

  render() {
    const increment = () => {
      this.setState({ ...this.state, age: this.state.age + 1 });
    };

    const decrement = () => {
      this.setState({ ...this.state, age: this.state.age - 1 });
    };

    const onChange = (e) => {
      const { name, value } = e.target;
      this.setState({ ...this.state, [name]: value });
    };

    return (
      <div style={{ flex: "1" }}>
        {this.props.title}
        <p>FirstName:{this.state.firstName}</p>
        <p>FirstName:{this.state.lastName}</p>
        <p>FirstName:{this.state.age}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <br />
        <input
          placeholder="Change FirstName"
          onChange={onChange}
          value={this.state.firstName}
          name="firstName"
        />
        <br />
        <input
          placeholder="Change LastName"
          onChange={onChange}
          value={this.state.lastName}
          name="lastName"
        />
        <br />
      </div>
    );
  }
}

export default ClassComponent;
