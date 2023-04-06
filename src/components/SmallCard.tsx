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
  background: lightblue;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Category = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Menu = styled.div``;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
`;

export default function SmallCard() {
  return (
    <>
      <Card>
        <CardTop></CardTop>
        <CardBottom>
          <CategoryContainer>
            <Category>Work</Category>
            <Menu> . . . </Menu>
          </CategoryContainer>
        </CardBottom>
      </Card>
    </>
  );
}
