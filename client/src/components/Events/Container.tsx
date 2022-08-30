import { EventCompetitor } from "./Competitor";
import React from "react";
import { Competitor, EventContainerProps, Selection } from "src/types";

export function EventContainer(props: EventContainerProps) {
  return (
    <li className="flex rounded-sm bg-blue">
      <div className="flex flex-col w-2/3 p-3">
        <ul className="flex flex-col pr-2 mt-1">
          {props.event.competitors.map((competitor: Competitor) => (
            <EventCompetitor competitor={competitor} key={competitor.id} />
          ))}
        </ul>
        <p className="text-xs sm:text-sm text-grey">Nov 22, 2022</p>
      </div>
      <ul className="flex w-1/2 gap-2 p-2">
        {props.event?.markets[0] ? (
          props.event.markets[0]?.selections?.map((selection: Selection) => (
            <li
              key={selection.id}
              className="flex items-center justify-center w-full h-full text-white rounded bg-bg-blue"
            >
              {selection.odds ? Number(selection.odds)?.toFixed(2) : "-"}
            </li>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white rounded bg-bg-blue">
            <p className="text-sm text-grey">No market available</p>
          </div>
        )}
      </ul>
    </li>
  );
}
