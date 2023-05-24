import { useState } from "react";
import LargeCard from "@/components/LargeCard/LargeCard";
import SmallCard from "@/components/SmallCard/SmallCard";
import data from "../data.json";
import { GlobalStyle, GridContainer, Heading, Main, Wrapper } from "./index.styles";

export default function Home() {
  const [timeframe, setTimeframe] = useState<Timeframe>('weekly');

 function handleTimeframeChange(newTimeframe: Timeframe) {
  setTimeframe(newTimeframe);
}

  return (
    <>
      <GlobalStyle />
      <Main>
        <Heading>Time tracking Dashboard</Heading>
        <Wrapper>
          <LargeCard handleTimeframeChange={handleTimeframeChange} />
          <GridContainer>
            {data.map((item) => (
              <SmallCard
                key={item.title}
                title={item.title}
                current={item.timeframes[timeframe].current}
                previous={item.timeframes[timeframe].previous}
                backgroundColor={item.backgroundColor}
                imageSrc={item.imageSrc}
                timeframe={timeframe}
              />
            ))}
          </GridContainer>
        </Wrapper>
      </Main>
    </>
  );
}
