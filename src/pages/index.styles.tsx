import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100%;
    background: #070606;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 50px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #070606;

`;

export const Wrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    height: auto;
    flex-direction: column;
  }

`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 40px;
  height: 550px;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    height: 100vh;
  }
  
`;

