import { connectToDatabase } from "./connector";

export default async (req, res) => {
  await connectToDatabase();

  res.status(200).json({ name: 'Kiran Virani' })
}