import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const params = useParams();
  const { event, eventData } = useRouteLoaderData("event-detail");
  console.log(eventData, "enter");
  return (
    <>
      <Suspense fallback={<p>...Loading</p>}>
        <Await resolve={event}>
          {(singleEventData) => <EventItem event={singleEventData} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>...Loading</p>}>
        <Await resolve={eventData}>
          {(allEvents) => <EventsList events={allEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  console.log(params);
  const id = params.id;
  console.log(id);
  return defer({
    event: await loadeSingleEvent(id),
    events: eventLoader(),
  });
  // const res = await fetch(`http://localhost:8080/events/${id}`);
  // console.log(res, "tett");
  // if (!res.ok) {
  //   throw json(
  //     { message: "Could not find the data for the selected object" },
  //     {
  //       status: 500,
  //     }
  //   );
  // } else {
  //   // const data = await res.json();
  //   // return data;
  //   return res;
  // }
}

export const eventDetailAction = async ({ params, request }) => {
  let url = "http://localhost:8080/events/" + params.id;
  const res = await fetch(url, {
    method: request.method,
  });
  if (!res.ok) {
    throw json(
      { message: "Could not Delete the event" },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
};
const eventLoader = async (id) => {
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
const loadeSingleEvent = async () => {
  const res = await fetch(`http://localhost:8080/events/${id}`);
  console.log(res, "tett");
  if (!res.ok) {
    throw json(
      { message: "Could not find the data for the selected object" },
      {
        status: 500,
      }
    );
  } else {
    const data = await res.json();
    return data.event;
    // return res;
  }
};
