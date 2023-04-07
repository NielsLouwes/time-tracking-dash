import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 350px;
  width: 300px;
`;

const CardTop = styled.div`
  height: 75px;
  background: red;
`;

const CardBottom = styled.div`
  height: 225px;
  background: hsl(235, 46%, 20%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 25px 25px;

  &:hover {
    background-color: hsl(235, 45%, 61%);
    cursor: pointer;
    
  }
`;

const Category = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
`;

const Menu = styled.div`
  color: white;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const HoursText = styled.p`
  font-size: 4rem;
  color: white;
`
const UpdateText = styled.p`
  font-size: 1.1rem;
  color: white;
`

type SmallCardProps = {
  title: string;
  current: number;
  previous: number;
}


export default function SmallCard({title, current , previous}: SmallCardProps) {
  return (
    <>
      <Card>
        <CardTop></CardTop>
        <CardBottom>
          <CategoryContainer>
            <Category>{title}</Category>
            <Menu> . . . </Menu>
          </CategoryContainer>
          <HoursContainer>
            <HoursText>{current}</HoursText>
            <UpdateText>Last week - {previous} hrs</UpdateText>
          </HoursContainer>
        </CardBottom>
      </Card>
    </>
  );
}
