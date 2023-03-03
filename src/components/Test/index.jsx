import React, { Component } from "react";
import {
  TestTitle,
  Description,
  Container,
  Button,
  Truck,
  Image,
} from "./style.js";
import heroImage from "../../assets/hero-image.png";
class Test extends Component {
  render() {
    return (
      <div>
        <Container>
          <TestTitle>Test</TestTitle>
          <Description>description</Description>
          <Button bg="blue" color="#333">
            Login
          </Button>

          <Button>Buy</Button>
          <Button>Login</Button>
          <Button hover="hover">Register</Button>
          <Container>hello world</Container>
          <Truck />
          <Image src={heroImage} alt="hero" />
        </Container>
      </div>
    );
  }
}

export default Test;
