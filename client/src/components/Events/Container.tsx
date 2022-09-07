import { EventCompetitor } from "./Competitor";
import React from "react";
import { Competitor, EventContainerProps, Selection } from "src/types";
import { EventMarket } from "./Market";
import { EventDateTime } from "./DateTime";

export function EventContainer(props: EventContainerProps) {
  return (
    <li className="flex rounded-sm bg-blue">
      <div className="flex flex-col w-2/3 p-3">
        <ul className="flex flex-col pr-2 mt-1">
          {props.event.competitors.map((competitor: Competitor) => (
            <EventCompetitor competitor={competitor} key={competitor.id} />
          ))}
        </ul>
        <EventDateTime startTime={props.event.startTime} />
      </div>
      <EventMarket markets={props.event?.markets} />
    </li>
  );
}
