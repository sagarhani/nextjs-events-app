import { nanoid } from "nanoid";

export const getEvents = async db => {
  return db.collection("events").find().toArray();
};

export const addNewEvent = async (db, event) => {
  return db
    .collection("events")
    .insertOne({
      _id: nanoid(12),
      createdAt: new Date().toDateString(),
      ...event
    })
    .then(({ ops }) => ops[0]);
};

export const getEvent = async (db, eventId) => {
  return await db.collection("events").findOne({ _id: eventId });
};
