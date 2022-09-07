import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { EventDateTime } from "@/components/Events/DateTime";
import data from "../data";

test("Test DateTime component", () => {
  const dateTime = data.event.payload.startTime;
  const { container } = render(
    <EventDateTime startTime={new Date(dateTime)} />
  );

  const startDate = new Date(dateTime).toLocaleDateString("en-GB");
  const startTime = new Date(dateTime).toLocaleTimeString("en-GB", {
    hour12: false,
  });
  expect(container.firstChild).toMatchSnapshot();
  expect(screen.getByTestId("event-start-date")).toHaveTextContent(
    new Date(dateTime)
      .toLocaleDateString("en-GB")
      .substring(0, startDate.length - 5)
  );
  expect(screen.getByTestId("event-start-time")).toHaveTextContent(
    new Date(dateTime)
      .toLocaleTimeString("en-GB", {
        hour12: false,
      })
      .substring(0, startTime.length - 3)
  );
});
