import React from "react";
import { Card, CardBottom, CardTop, Name, ReportForText, TimePeriod, ImageDiv } from "./LargeCard.styles";

export default function LargeCard() {
  return (
    <>
      <Card>
        <CardTop>
            <ImageDiv></ImageDiv>
            <ReportForText>Report for</ReportForText>
            <Name>Jeremy Robson</Name>
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
