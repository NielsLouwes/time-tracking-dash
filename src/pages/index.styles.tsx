import styled from "styled-components";

export const Heading = styled.h2`
  margin-bottom: 50px;
`;

export const Main = styled.main`
  background: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  height: 500px;
  border: 1px solid red;
  /* height: auto; */
  /* width: 1000px; */
`;

