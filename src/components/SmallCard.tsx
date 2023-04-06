import React from "react";
import styled from "styled-components";
import data from "../data.json"

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
  background: lightblue;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 25px 25px;
`;

const Category = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Menu = styled.div``;

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
`
const UpdateText = styled.p`
  font-size: 1.1rem;
`

type SmallCardProps = {
  title: string;
  current: number;
  previous: number;
}


export default function SmallCard({title, current , previous}: SmallCardProps) {

  console.log(data, "data inside card")
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
