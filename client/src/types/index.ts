export type Event = {
  __typename: string;
  type: string;
  payload: Payload;
};

export type Payload = {
  __typename: string;
  id: string;
  competitors: Competitor[];
  markets: Market[];
  startTime: Date;
  updatedAt: Date;
};

export type Competitor = {
  __typename: string;
  id: string;
  name: string;
  score: number;
};

export type Market = {
  __typename: string;
  id: string;
  name: string;
  selections: Selection[];
};

export type Selection = {
  __typename: string;
  id: string;
  name: string;
  odds: number | null;
};

export type EventContainerProps = {
  event: Payload;
};

export type EventTeamProps = {
  competitor: {
    score: number;
    name: string;
  };
};

export type EventOddsProps = {
  selection: { odds: number | null };
};
