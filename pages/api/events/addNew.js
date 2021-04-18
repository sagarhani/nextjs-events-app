import nc from "next-connect";
import middleware from "../../../middleware/all";
import { event } from "../../../db";
import onError from "../../../middleware/error";

const handler = nc({
  onError
});

handler.use(middleware);

handler.post(async (req, res) => {
  const newEvent = await event.addNewEvent(req.db, {
    title: req.body.title,
    description: req.body.description,
    createdBy: req.body.createdBy,
    imageUrl: req.body.imageUrl,
    isFeatured: req.body.isFeatured || false
  });
  res.send(newEvent);
});

export default handler;
