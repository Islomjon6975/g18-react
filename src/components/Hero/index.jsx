import React, { Component } from "react";
import { Container, Content, Image, Wrapper } from "./style";
import heroImg from "../../assets/images/hero-image.png";

class Hero extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Content>
            <Content.Richtext>Modern Interior Design Studio</Content.Richtext>
            <Content.Btns>
              <button>Shop Now</button>
              <button>Explore</button>
            </Content.Btns>
          </Content>

          <Image src={heroImg} alt="hero-image" />
        </Wrapper>
      </Container>
    );
  }
}

export default Hero;
