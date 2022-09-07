import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react";
import { EventCompetitor } from "@/components/Events/Competitor";
import data from "../data";

test("Test Event Competitor Component",  () => {
  const {container} = render(
    <EventCompetitor
      competitor={data.event.payload.competitors[0]}
    />
  );
  
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.getByTestId("competitor-name")).toHaveTextContent(data.event.payload.competitors[0].name);
  expect(screen.getByTestId("competitor-score")).toHaveTextContent(data.event.payload.competitors[0].score.toString());
});