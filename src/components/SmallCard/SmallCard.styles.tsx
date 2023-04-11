import styled from "styled-components";

export const Card = styled.div`
  height: 250px;
  width: 200px;
  position: relative;
`;

export const CardTop = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: flex-end;
`;

export const CardBottom = styled.div`
  height: 225px;
  background: hsl(235, 46%, 20%);
  border-radius: 15px;
  padding: 25px 25px;
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 32px;

  &:hover {
    background-color: hsl(235, 45%, 61%);
    cursor: pointer;
  }
`;

export const Category = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
`;

export const Menu = styled.div`
  color: white;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const HoursText = styled.p`
  font-size: 4rem;
  color: white;
`;
export const UpdateText = styled.p`
  font-size: 1.1rem;
  color: white;
`;