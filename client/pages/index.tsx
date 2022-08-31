import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { Store, ReactNotifications } from "react-notifications-component";
import { EVENT_UPDATE, GET_EVENTS } from "src/graphql/schema";
import { Event } from "src/types";
import { EventContainer } from "@/components/Events/Container";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

const Home: NextPage = () => {
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

        const events = prev.getEvents?.length ? [...prev.getEvents] : [];
        const idx = events.findIndex(
          (e: Event) => e.payload.id === eventUpdate.payload.id
        );

        if (idx > -1) {
          events[idx] = eventUpdate;

          Store.addNotification({
            title: "New Update",
            message: `${eventUpdate.payload.competitors[0]?.name} vs ${eventUpdate.payload.competitors[1]?.name}`,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true,
            },
          });
        }

        return Object.assign({}, prev, {
          getEvents: events,
        });
      },
    });
  }, [subscribeToMore]);

  return (
    <main className="min-h-screen py-8 bg-bg-blue font-primary">
      <ReactNotifications />
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
