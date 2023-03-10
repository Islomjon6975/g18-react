import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/funni.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as cart } from "../../assets/icons/cart.svg";

const Container = styled.header`
  width: 100%;
  background-color: var(--primary-green);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  max-width: 1500px;
  width: 100%;
  padding: 20px 178px;
  margin: auto;
  border: 1px solid black;

  @media (max-width: 1400px) {
    padding: 20px 128px;
  }

  @media (max-width: 1300px) {
    padding: 20px 100px;
  }

  @media (max-width: 1200px) {
    padding: 20px 70px;
  }

  @media (max-width: 1000px) {
    padding: 20px 40px;
  }
`;

const Logo = styled(logo)``;
const User = styled(user)``;
const Cart = styled(cart)``;

const Left = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 95px;

  @media (max-width: 1000px) {
    gap: 50px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 100%;

  @media (max-width: 776px) {
    display: none;
  }
`;

Navigation.Ul = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 43px;

  @media (max-width: 1000px) {
    gap: 30px;
  }
`;
Navigation.Ul.Li = styled.li`
  list-style-type: none;
  color: var(--primary-white);
  padding-bottom: 7px;
  :hover {
    border-bottom: 5px solid var(--primary-yellow);
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export { Container, Wrapper, Logo, Left, Navigation, User, Cart, Icons };
