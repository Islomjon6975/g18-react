import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  background-color: var(--primary-white);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  max-width: 1500px;
  width: 100%;
  padding: 116px 178px 63px 178px;
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

const Column = styled.div`
  width: 100%;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Product = styled.div``;

export { Container, Wrapper, Column, Product };
