export type Event = {
  type: string;
  payload: Payload;
};

export type Payload = {
  id: string;
  competitors: Competitor[];
  markets: Market[];
  startTime: Date;
  updatedAt: Date;
};

export type Competitor = {
  id: string;
  name: string;
  score: number;
};

export type Market = {
  id: string;
  name: string;
  selections: Selection[];
};

export type Selection = {
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

export type EventMarketProps = {
  markets?: Market[];
};

export type DateTimeProps = {
  startTime: Date;
};
