import React from "react";
import { EventTeamProps } from "src/types";

export function EventCompetitor(props: EventTeamProps) {
  return (
    <li className="flex justify-between mt-1">
      <p className="text-xs text-white sm:text-sm" data-testid="competitor-name">{props.competitor?.name}</p>
      <p className="text-xs text-green sm:text-sm" data-testid="competitor-score">{props.competitor?.score}</p>
    </li>
  );
}
