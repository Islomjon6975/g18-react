import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  background-color: var(--primary-green);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1500px;
  width: 100%;
  padding: 0px 178px;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 128px;

  @media (max-width: 1500px) {
    gap: 100px;
  }

  @media (max-width: 1300px) {
    gap: 70px;
  }
  @media (max-width: 1500px) {
    gap: 50px;
  }
`;

Content.Richtext = styled.h1`
  max-width: 419px;
`;

Content.Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Image = styled.img`
  border: 1px solid red;
  max-width: 710px;
  object-fit: cover;

  @media (max-width: 1500px) {
    max-width: 550px;
  }

  @media (max-width: 1000px) {
    max-width: 450px;
  }
`;

export { Container, Wrapper, Content, Image };
