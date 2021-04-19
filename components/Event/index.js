import React, { useState } from "react";
import { EventCardContainer, StyledImage } from "./styles";
import Link from "next/link";

export const Event = ({ event }) => {
  return (
    <Link href={`/event/${event._id}`}>
      <a>
        <EventCardContainer>
          <StyledImage
            alt={event.title}
            src={event.imageUrl}
            width={1200}
            height={1200}
          />
          <h3>{event.title}</h3>
        </EventCardContainer>
      </a>
    </Link>
  );
};
