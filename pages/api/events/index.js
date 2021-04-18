import nc from "next-connect";
import middleware from "../../../middleware/all";
import { event } from "../../../db";
import onError from "../../../middleware/error";

const handler = nc({
  onError
});

handler.use(middleware);

handler.get(async (req, res) => {
  const events = await event.getEvents(req.db);
  res.send(events);
});

export default handler;
