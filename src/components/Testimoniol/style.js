import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  overflow: hidden;

  .slider {
    width: 100%;
  }

  .slide {
    padding: 30px 100px;
  }

  h3 {
    text-align: center;
  }

  .slick-next {
    right: 25px !important;
  }

  .slick-next::before {
    color: blue !important;
  }

  .slick-prev {
    left: 25px !important;
    z-index: 10;
  }

  .slick-prev::before {
    color: blue !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

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

export { Container, Wrapper };
