import styled from "styled-components";

export const Card = styled.div`
  height: 500px;
  width: 250px;
  margin-right: 25px;
  position: relative;

  @media screen and (max-width: 400px) {
   width: 350px;
   padding-left: 20px;
   height: 250px;
  }
`;

export const CardTop = styled.div`
  height: 400px;
  background: hsl(246, 80%, 60%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    height: 125px;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    padding: 20px;
  }
`;

export const ImageDiv = styled.div`
  margin-bottom: 50px;
`;

export const ReportForText = styled.p`
  color: lightgrey;

  @media screen and (max-width: 400px) {
    margin-left: 15px;
    font-size: 12px;
  }
`;

export const Name = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: white;

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
    margin-left: 15px;
  }
`;

export const CardBottom = styled.div`
  height: 150px;
  background-color: hsl(235, 46%, 20%);
  color: white;
  padding-left: 35px;
  padding-top: 25px;
  
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: absolute;
  width: 100%;
  bottom: -45px;
  z-index: 1;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    display: flex;
    position: static;
    height: 75px;
  }
`;

export const TimePeriod = styled.div`
  margin-bottom: 15px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    margin-right: 25px;
    margin-left: 15px;
  }
`;
