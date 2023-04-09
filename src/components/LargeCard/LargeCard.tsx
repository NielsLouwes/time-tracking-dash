import React from "react";
import {
  Card,
  CardBottom,
  CardTop,
  Name,
  ReportForText,
  TimePeriod,
  ImageDiv,
} from "./LargeCard.styles";
import Image from "next/image";

export default function LargeCard() {
  return (
    <>
      <Card>
        <CardTop>
          <ImageDiv>
            <Image
              src="/image-jeremy.png"
              alt="My Image"
              width={75}
              height={75}
            />
          </ImageDiv>
          <div>
            <ReportForText>Report for</ReportForText>
            <Name>Jeremy Robson</Name>
          </div>
        </CardTop>
        <CardBottom>
          <TimePeriod>Daily</TimePeriod>
          <TimePeriod>Weekly</TimePeriod>
          <TimePeriod>Monthly</TimePeriod>
        </CardBottom>
      </Card>
    </>
  );
}
