import { NextApiRequest, NextApiResponse } from "next";
import { twits } from "../../dummydatas/twits";
import { connectDB } from "@/utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await connectDB).db("portfolio");

  const idx = Number(req.query.idx);

  if (idx) {
    if (req.method === "GET") {
      const allTwits = await db
        .collection("twits")
        .find()
        .skip(idx)
        .limit(3)
        .toArray();

      return res.status(200).json(allTwits);
    }
  }
}
