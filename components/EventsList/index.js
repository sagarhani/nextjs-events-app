import React, { useState } from "react";
import { Event } from "../Event";

export const EventsList = ({ events }) => {
  return (
    <>
      {events.map(event => {
        return <Event key={event._id} event={event} />;
      })}
    </>
  );
};
