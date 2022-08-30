import type { NextPage } from "next";
import { useQuery, useSubscription } from "@apollo/client";
import { GET_EVENTS } from "src/graphql/schema";
import { Event } from "src/types";
import { EventContainer } from "@/components/Events/Container";

const Home: NextPage = () => {
  const { data } = useQuery(GET_EVENTS);

  return (
    <main className="min-h-screen py-8 bg-bg-blue font-primary">
      <header className="py-4 text-4xl font-normal text-center text-white">
        Yodds Events
      </header>
      <section className="m-auto sm:max-w-screen-md">
        <ul className="flex flex-col gap-1">
          {data?.getEvents?.map((event: Event) => (
            <EventContainer event={event.payload} key={event.payload.id} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
