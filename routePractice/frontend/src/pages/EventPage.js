// import { useEffect, useState } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);

  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  const { events } = useLoaderData();
  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }
  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={events}>
          {(laodedEvebt) => <EventsList events={laodedEvebt} />}
        </Await>
      </Suspense>

      {/* <EventsList events={events} /> */}
    </>
  );
}

export default EventsPage;

const eventLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return { isError: true, message: "API Failed" };
    //throw new Error("API Failed to get data");
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    //setFetchedEvents(resData.events);
    return resData.events;
  }
};

export function loader() {
  return defer({
    events: eventLoader(),
  });
}
