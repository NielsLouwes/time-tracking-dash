import styled from "styled-components";

export const Card = styled.div`
  height: 500px;
  width: 250px;
  margin-right: 50px;
  position: relative;
`;

export const CardTop = styled.div`
  height: 400px;
  background: hsl(246, 80%, 60%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
 
`;

export const ImageDiv = styled.div`
  margin-bottom: 50px;
`;

export const ReportForText = styled.p`
  color: lightgrey;
`;

export const Name = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: white;
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
`;

export const TimePeriod = styled.div`
  margin-bottom: 15px;
`;
