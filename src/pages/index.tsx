import LargeCard from "@/components/LargeCard/LargeCard";
import SmallCard from "@/components/SmallCard/SmallCard";
import data from "../data.json";
import { GridContainer, Heading, Main, Wrapper } from "./index.styles";

export default function Home() {
  console.log("data", data);
  return (
    <Main>
      <Heading>Time tracking Dashboard</Heading>
      <Wrapper>
        <LargeCard />
        <GridContainer>
          {data.map((item) => (
            <SmallCard
              key={item.title}
              title={item.title}
              current={item.timeframes.weekly.current}
              previous={item.timeframes.weekly.previous}
              backgroundColor={item.backgroundColor}
              imageSrc={item.imageSrc}
            />
          ))}
        </GridContainer>
      </Wrapper>
    </Main>
  );
}
