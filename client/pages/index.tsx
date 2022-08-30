import type { NextPage } from "next";
import { useQuery, useSubscription } from "@apollo/client";
import { EVENT_UPDATE, GET_EVENTS } from "src/graphql/schema";
import { Event } from "src/types";
import { EventContainer } from "@/components/Events/Container";
import { Loader } from "@/components/Loader";

const Home: NextPage = () => {
  const { data, loading } = useQuery(GET_EVENTS);
  const { data: eventUpdateData } = useSubscription(EVENT_UPDATE);

  console.log({ eventUpdateData });

  return (
    <main className="min-h-screen py-8 bg-bg-blue font-primary">
      <header className="py-4 text-4xl font-normal text-center text-white">
        Yodds Events
      </header>
      {loading ? (
        <div className="flex justify-center m-20">
          <Loader />
        </div>
      ) : (
        <section className="m-auto sm:max-w-screen-md">
          <ul className="flex flex-col gap-1">
            {data?.getEvents?.map((event: Event) => (
              <EventContainer event={event.payload} key={event.payload.id} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};

export default Home;
