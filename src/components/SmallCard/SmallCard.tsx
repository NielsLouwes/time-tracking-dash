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
import Image from "next/image";

type SmallCardProps = {
  title: string;
  current: number;
  previous: number;
  backgroundColor: string;
  imageSrc: string;
};

export default function SmallCard({
  title,
  current,
  previous,
  backgroundColor,
  imageSrc,
}: SmallCardProps) {
  return (
    <>
      <Card>
        <CardTop backgroundColor={backgroundColor}>
          <Image
              src={imageSrc}
              alt="My Image"
              width={75}
              height={75}
            />
        </CardTop>
        <CardBottom>
          <CategoryContainer>
            <Category>{title}</Category>
            <Menu> . . . </Menu>
          </CategoryContainer>
          <HoursContainer>
            <HoursText>{current}hrs</HoursText>
            <UpdateText>Last week - {previous} hrs</UpdateText>
          </HoursContainer>
        </CardBottom>
      </Card>
    </>
  );
}
