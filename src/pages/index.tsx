import LargeCard from "@/components/LargeCard/LargeCard";
import SmallCard from "@/components/SmallCard/SmallCard";
import Head from "next/head";
import styled from "styled-components";
import data from "../data.json";

const Heading = styled.h2`
  margin-bottom: 50px;
`;

const Main = styled.main`
  background: white;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  height: auto;
  width: 1000px;
`;

export default function Home() {
  console.log("data", data);
  return (
    <Main>
      <Heading>Time tracking Dashboard</Heading>
      <LargeCard />
      <GridContainer>
        {data.map((item) => (
          <SmallCard
            key={item.title}
            title={item.title}
            current={item.timeframes.weekly.current}
            previous={item.timeframes.weekly.previous}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </GridContainer>
    </Main>
  );
}
