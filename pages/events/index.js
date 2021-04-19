import { server } from "../../config";
import { EventsList } from "../../components/EventsList";
import { EventsListContainer } from "../../components/EventsList/styles";

const Events = ({ allEvents }) => {
  return (
    <EventsListContainer>
      <EventsList events={allEvents} />
    </EventsListContainer>
  );
};

export const getStaticProps = async () => {
  // uncomment this after first deployment

  const allEventsResponse = await fetch(`${server}/api/events`);
  const allEvents = await allEventsResponse.json();

  return {
    props: { allEvents }
  };
};

export default Events;
