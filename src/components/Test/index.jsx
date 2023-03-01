import React, { Component } from "react";
import styled from "styled-components";
import "./style.css";

const TestTitle = styled.h1`
  color: red;
`;

const Description = styled.p`
  color: blue;
`;

const Container = styled.div`
  background-color: crimson;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  background: ${(props) => (props.bg ? props.bg : "yellow")};
  color: ${(props) => (props.color ? props.color : "black")};
  /* ${(props) => console.log(props.bg, props.color)} */
`;

class Test extends Component {
  render() {
    return (
      <Container>
        <TestTitle>Test</TestTitle>
        <Description>description</Description>
        <Button bg="blue" color="#333">
          Login
        </Button>
        <Button bg="black" color="white">
          Register
        </Button>
        <Button bg="green" color="#fff">
          Buy
        </Button>
        <Button>Buy</Button>
        <Container>hello world</Container>
      </Container>
    );
  }
}

export default Test;
