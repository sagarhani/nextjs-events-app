import { server } from "../../config";

const Events = ({ allEvents }) => {
  return (
    <div>
      <h3>Featured Events</h3>
      {allEvents.map(event => {
        return (
          <div key={event._id}>
            <p>{event.title}</p>
            <small>{event.description}</small>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  // uncomment this after first deployment

  //   const allEventsResponse = await fetch(`${server}/api/events`);
  //   const allEvents = await allEventsResponse.json();

  return {
    props: { allEvents: [] }
  };
};

export default Events;
