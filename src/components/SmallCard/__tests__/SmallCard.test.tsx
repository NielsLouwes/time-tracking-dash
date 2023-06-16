import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SmallCard from "../SmallCard";

describe("SmallCard component", () => {
  const defaultProps = {
    title: "Work",
    current: 5,
    previous: 2,
    backgroundColor: "blue",
    imageSrc: "/some_image.png",
    timeframe: "daily",
  };

  beforeEach(() => {
    render(<SmallCard {...defaultProps} />);
  });

  it("should render the Work title on the card", () => {
    expect(screen.getByText("Work")).toBeInTheDocument();
  });

  it("should render the correct timeframe of yesterday based on daily prop", () => {
    expect(screen.getByText("Yesterday - 2 hrs")).toBeInTheDocument();
  });

  it("should render the correct current hours text ", () => {
    expect(screen.getByText("5hrs")).toBeInTheDocument();
  });

  it("displays correct timeframe when it's set to weekly", () => {
    render(<SmallCard {...{ ...defaultProps, timeframe: "weekly" }} />);
    expect(screen.getByText("Last week - 2 hrs")).toBeInTheDocument();
  });

  it("displays correct timeframe when it's set to yearly", () => {
    render(<SmallCard {...{ ...defaultProps, timeframe: "yearly" }} />);
    expect(screen.getByText("Last month - 2 hrs")).toBeInTheDocument();
  });
});
