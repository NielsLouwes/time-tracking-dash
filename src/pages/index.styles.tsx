import styled from "styled-components";

export const Heading = styled.h2`
  margin-bottom: 50px;
`;

export const Main = styled.main`
  /* background: white; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #070606;
`;

export const Wrapper = styled.div`
  display: flex;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 40px;
  height: 550px;
`;

