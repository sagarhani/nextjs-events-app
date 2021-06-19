export default async function onNoMatch(req, res) {
  res.status(405).end(`Method ${req.method} is not allowed!`);
}
