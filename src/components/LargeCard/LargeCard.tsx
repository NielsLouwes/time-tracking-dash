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

type handleTimeframeChangeProps = () => void;

interface LargeCardProps {
  myFunctionProp: handleTimeframeChangeProps;
}

export default function LargeCard({handleTimeframeChange}: LargeCardProps) {
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
          <TimePeriod onClick={() => handleTimeframeChange('daily')}>Daily</TimePeriod>
          <TimePeriod onClick={() => handleTimeframeChange('weekly')}>Weekly</TimePeriod>
          <TimePeriod onClick={() => handleTimeframeChange('monthly')}>Monthly</TimePeriod>
        </CardBottom>
      </Card>
    </>
  );
}
