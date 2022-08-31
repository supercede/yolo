type Category = {
  id: string;
  slug: string;
  translations: Translation[];
};

type Translation = {
  id?: string;
  lang: string;
  value: string;
};

type Competitor = {
  id: string;
  name: string;
  score: number;
  translations: Translation[];
};

type Selection = {
  id: string;
  name: string;
  odds: number;
};

type Market = {
  id: string;
  name: string;
  selections: Selection[];
  translations: Translation[];
};

type Payload = {
  id: string;
  category: Category;
  competitors: Competitor[];
  markets: Market[];
  startTime: Date;
  updatedAt: Date;
};

export type Event = {
  type: eventUpdate;
  payload: Payload;
};

enum eventUpdate {
  DATA_EVENT = 'event-data',
  UPDATE_EVENT = 'event-update',
}

export enum Constants {
  UPDATE_EVENT = 'EVENT_UPDATED',
}
