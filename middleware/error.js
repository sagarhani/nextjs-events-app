export default async function onError(error, req, res, next) {
  console.log("Application error : ", error.message);
  res.status(500).end(`Oops! Something went wrong. ${error.message}`);
}
