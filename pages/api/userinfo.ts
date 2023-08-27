import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let db = (await connectDB).db("portfolio");

  const { nickname } = req.query;

  const user = await db.collection("user_cred").findOne({ nickname: nickname });

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json(null);
  }
}
