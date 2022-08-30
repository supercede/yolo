import type { NextPage } from "next";
import {
  useQuery,
  useSubscription,
  SubscribeToMoreOptions,
} from "@apollo/client";
import { EVENT_UPDATE, GET_EVENTS } from "src/graphql/schema";
import { Event } from "src/types";
import { EventContainer } from "@/components/Events/Container";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [d, setD] = useState([]);
  let { data, loading, subscribeToMore } = useQuery(GET_EVENTS);

  useEffect(() => {
    subscribeToMore({
      document: EVENT_UPDATE,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData?.data) {
          return prev;
        }

        const {
          data: { eventUpdate },
        } = subscriptionData;

        // if (eventUpdate) {
        const events = prev.getEvents?.length ? [...prev.getEvents] : [];
        const idx = events.findIndex(
          (e: Event) => e.payload.id === eventUpdate.payload.id
        );

        if (idx > -1) {
          events[idx] = eventUpdate;
        }

        // }
        return Object.assign({}, prev, {
          getEvents: events,
        });
      },
    });
  }, [subscribeToMore]);

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
