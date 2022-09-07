import { EventContainerProps, EventMarketProps, Selection } from "src/types";

export function EventMarket(props: EventMarketProps) {
    return (
        <ul className="flex w-1/2 gap-2 p-2">
        {props?.markets?.[0] ? (
          props.markets[0]?.selections?.map((selection: Selection) => (
            <li
              key={selection.id}
              className="flex items-center justify-center w-full h-full text-white rounded bg-bg-blue"
              data-testid={`market-odds-${selection.id}`}
            >
              {selection.odds ? Number(selection.odds)?.toFixed(2) : "-"}
            </li>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white rounded bg-bg-blue">
            <p className="text-sm text-grey" data-testid="no-market">No market available</p>
          </div>
        )}
      </ul>
    )
}