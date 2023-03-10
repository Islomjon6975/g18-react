import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {},
      student: { id: 1, name: "Jack", status: "student" },
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {/* <h2>Users</h2>
        {this.state?.users?.map((user) => (
          <div key={user.id}>
            {user.id} - {user.name}
          </div>
        ))}
        <hr />
        <div>
          ID: {this.state?.user?.id}------ Name: {this.state?.user?.name}------
          Phone: {this.state?.user?.phone}------ Email:{" "}
          {this.state?.user?.email}------ City:{" "}
          {this.state?.user?.address?.city}------
        </div> */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          {this.state.products?.map((product) => (
            <div>
              <img src={product.image} alt={product.title} width="100" />
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Life cycle methods
// GET, POST, PUT va PATCH
