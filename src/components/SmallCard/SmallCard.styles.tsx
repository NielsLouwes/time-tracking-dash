import styled from "styled-components";

export const Card = styled.div`
  height: 350px;
  width: 300px;
  position: relative;
`;

export const CardTop = styled.div<{backgroundColor: string }>`
  background: ${(props) => props.backgroundColor || "lightred"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 15%;
 
`;

export const CardBottom = styled.div`
  height: 225px;
  background: hsl(235, 46%, 20%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 25px 25px;
   z-index: 1;

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