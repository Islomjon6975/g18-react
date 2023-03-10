import React, { Component } from "react";
import {
  Cart,
  Container,
  Icons,
  Left,
  Logo,
  Navigation,
  User,
  Wrapper,
} from "./style";

class Header extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Logo />

          <Left>
            <Navigation>
              <Navigation.Ul>
                <Navigation.Ul.Li>Home</Navigation.Ul.Li>
                <Navigation.Ul.Li>About us</Navigation.Ul.Li>
                <Navigation.Ul.Li>Services</Navigation.Ul.Li>
                <Navigation.Ul.Li>Blog</Navigation.Ul.Li>
                <Navigation.Ul.Li>Contact us</Navigation.Ul.Li>
              </Navigation.Ul>
            </Navigation>
            <Icons>
              <User />
              <Cart />
            </Icons>
          </Left>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
