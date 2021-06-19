import nc from "next-connect";
import middleware from "../../../middleware/all";
import { event } from "../../../db";
import onError from "../../../middleware/error";
import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const config = {
  api: {
    bodyParser: false
  }
};

const handler = nc({
  onError
});

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    // form.uploadDir = "./public/uploads";
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log("error ------->", err);
        throw new Error("Failed to process form data");
      } else {
        console.log("files", files);
        try {
          if (files.image) {
            cloudinary.uploader.upload(
              files.image.path,
              {
                folder: "nextjs-events-app",
                public_id: `${new Date().getTime()}__${fields.title}--${
                  files.image.name
                }`
              },
              async function (error, result) {
                if (result) {
                  const newEvent = await event.addNewEvent(req.db, {
                    title: fields.title,
                    description: fields.description,
                    createdBy: fields.createdBy,
                    imageUrl: result.secure_url,
                    isFeatured: fields.isFeatured || false
                  });
                  res.send(newEvent);
                } else if (error) {
                  throw new Error("Failed to upload the image");
                }
              }
            );
          } else {
            throw new Error("Failed to process form data");
          }
        } catch (error) {
          throw new Error("Failed to create the event");
        }
      }
    });
  } catch (error) {
    throw new Error("Failed to process form data");
  }
});

export default handler;
