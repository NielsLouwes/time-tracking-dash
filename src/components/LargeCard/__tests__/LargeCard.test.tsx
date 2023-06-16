import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import LargeCard from "../LargeCard";

describe("LargeCard component", () => {
  const handleTimeframeChangeMock = jest.fn();

  beforeEach(() => {
    render(<LargeCard handleTimeframeChange={handleTimeframeChangeMock} />);
  });

  afterEach(() => {
    handleTimeframeChangeMock.mockClear();
  });

  it("should render the correct headings and text on the page", () => {
    expect(screen.getByText(/Report for/)).toBeInTheDocument();
    expect(screen.getByText(/Jeremy Robson/)).toBeInTheDocument();
    expect(screen.getByText(/Daily/)).toBeInTheDocument();
    expect(screen.getByText(/Weekly/)).toBeInTheDocument();
    expect(screen.getByText(/Monthly/)).toBeInTheDocument();
  });

   it('calls handleTimeframeChange with correct argument when Daily is clicked', () => {
    fireEvent.click(screen.getByText(/Daily/));
    expect(handleTimeframeChangeMock).toHaveBeenCalledWith('daily');
  });

  it('calls handleTimeframeChange with correct argument when Weekly is clicked', () => {
    fireEvent.click(screen.getByText(/Weekly/));
    expect(handleTimeframeChangeMock).toHaveBeenCalledWith('weekly');
  });

  it('calls handleTimeframeChange with correct argument when Monthly is clicked', () => {
    fireEvent.click(screen.getByText(/Monthly/));
    expect(handleTimeframeChangeMock).toHaveBeenCalledWith('monthly');
  });
});
