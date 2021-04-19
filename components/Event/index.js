import { EventCardContainer, StyledImage } from "./styles";
import { useRouter } from "next/router";

export const Event = ({ event }) => {
  const router = useRouter();

  const navigateToEventPage = eventId => {
    router.push(`/events/${eventId}`);
  };

  return (
    <EventCardContainer
      onClick={() => {
        navigateToEventPage(event._id);
      }}
    >
      <StyledImage
        alt={event.title}
        src={event.imageUrl}
        width={1200}
        height={1200}
      />
      <h3>{event.title}</h3>
    </EventCardContainer>
  );
};
