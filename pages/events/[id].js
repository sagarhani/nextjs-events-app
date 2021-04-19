import { server } from "../../config";
import { Event } from "../../components/Event";
import { EventsListContainer } from "../../components/EventsList/styles";

const EventPage = ({ event }) => {
  return (
    <EventsListContainer>
      <Event event={event} />
    </EventsListContainer>
  );
};

export const getServerSideProps = async context => {
  const eventId = context.params.id;
  const eventResponse = await fetch(`${server}/api/events/${eventId}`);
  const event = await eventResponse.json();

  return {
    props: { event }
  };
};

export default EventPage;
