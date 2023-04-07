import React from "react";
import {
  Card,
  CardBottom,
  CardTop,
  Category,
  CategoryContainer,
  HoursContainer,
  HoursText,
  Menu,
  UpdateText,
} from "./SmallCard.styles";

type SmallCardProps = {
  title: string;
  current: number;
  previous: number;
  backgroundColor: string;
};

export default function SmallCard({
  title,
  current,
  previous,
  backgroundColor,
}: SmallCardProps) {
  return (
    <>
      <Card>
        <CardTop backgroundColor={backgroundColor}></CardTop>
        <CardBottom>
          <CategoryContainer>
            <Category>{title}</Category>
            <Menu> . . . </Menu>
          </CategoryContainer>
          <HoursContainer>
            <HoursText>{current}</HoursText>
            <s>Last week - {previous} hrs</s>
          </HoursContainer>
        </CardBottom>
      </Card>
    </>
  );
}
