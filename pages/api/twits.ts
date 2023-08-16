import { NextApiRequest, NextApiResponse } from "next";
import { twits } from "../../dummydatas/twits";
import { connectDB } from "@/utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await connectDB).db("portfolio");
  console.log(req.query);
  const idx = Number(req.query.idx);
  console.log(`idx: ${idx}`);

  if (idx !== undefined) {
    if (req.method === "GET") {
      const allTwits = await db
        .collection("twits")
        .find()
        .skip(idx)
        .limit(3)
        .toArray();

      console.log(allTwits);

      return res.status(200).json(allTwits);
    }
  } else {
    return res.status(400).json([]);
  }
}
