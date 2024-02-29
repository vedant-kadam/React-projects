import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
const EditEventPage = () => {
  const eventData = useRouteLoaderData("event-detail");

  return <EventForm event={eventData.event} method="patch" />;
};

export default EditEventPage;
