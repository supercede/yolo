import { DateTimeProps } from "src/types";

export function EventDateTime(props: DateTimeProps) {
  const startDate = new Date(props.startTime).toLocaleDateString("en-GB");
  const startTime = new Date(props.startTime).toLocaleTimeString("en-GB", {
    hour12: false,
  });

  return (
    <p className="text-xs sm:text-sm text-grey">
      <span data-testid="event-start-date" data-test>
        {startDate.substring(0, startDate.length - 5)}{" "}
      </span>
      <span data-testid="event-start-time" data-test>
        {startTime.substring(0, startTime.length - 3)}
      </span>
    </p>
  );
}
