import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { EventMarket } from "@/components/Events/Market";
import data from "../data";
import { Market } from "src/types";

test("Return Market Odds",  () => {
  const {markets} = data.event.payload
  const {container} = render(
    <EventMarket
      markets={markets}
    />
  );
  
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.getByTestId(`market-odds-${markets[0].selections[0].id}`)).toHaveTextContent(markets[0].selections[0].odds.toFixed(2));
});

test("Return 'No Market Available' when no market is available", () => {
    // const markets = ([] as unknown) as Market[]
    const markets = [] as Market[]
    const {container} = render(
      <EventMarket
        markets={markets}
      />
    );
    
    expect(container.firstChild).toMatchSnapshot()
    expect(screen.getByTestId('no-market')).toHaveTextContent('No market available');
  });