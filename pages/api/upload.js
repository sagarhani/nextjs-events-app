import formidable from "formidable";
var cloudinary = require("cloudinary").v2;

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

export default async (req, res) => {
  const form = new formidable.IncomingForm();

  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log("error", err);
    }
    cloudinary.uploader.upload(
      files.image.path,
      {
        folder: "nextjs-events-app",
        public_id: files.image.name
      },
      function (error, result) {
        console.log("response ", result, error);
      }
    );
    res.json({ fields, files });
  });
};
