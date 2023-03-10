import React, { Component } from "react";
import { Column, Container, Product, Wrapper } from "./style";
import img1 from "../../assets/images/product-1.png";
import img2 from "../../assets/images/product-2.png";
import img3 from "../../assets/images/product-3.png";

export default class ExcellentMaterails extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Column>
            <h2>Crafted with excellent material.</h2>
            <p>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </p>
            <button>Explore</button>
          </Column>
          <Column>
            <Product>
              <img src={img1} alt="img1" />
              
              <div className="bg"></div>
            </Product>
          </Column>
          <Column>3</Column>
          <Column>4</Column>
        </Wrapper>
      </Container>
    );
  }
}
