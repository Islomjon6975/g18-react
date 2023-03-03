import styled, { css } from "styled-components";
import { ReactComponent as truck } from "../../assets/truck.svg";
// import "./style.css";

const common = css`
  background: #666;
`;

const TestTitle = styled("h1")`
  color: red;

  :hover {
    color: yellow;
  }
  :active {
    color: green;
  }

  @media (max-width: 1000px) {
    background: blue;
  }

  @media (max-width: 428px) {
    background: green;
  }
`;

const Description = styled.p`
  color: blue;
`;

const Container = styled.div`
  /* background-color: crimson; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${common}
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  background: ${(props) => (props.bg ? props.bg : "yellow")};
  color: ${(props) => (props.color ? props.color : "black")};
  /* ${(props) => console.log(props.bg, props.color)} */

  ${(props) =>
    props.hover &&
    `:hover {
    transform: scale(0.97);
    
  }`}
`;

const Image = styled.img`
  width: 300px;
`;

const Truck = styled(truck)``;

export { TestTitle, Description, Container, Button, Truck, Image };
