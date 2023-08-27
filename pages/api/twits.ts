import { NextApiRequest, NextApiResponse } from "next";
import { twits } from "../../dummydatas/twits";
import { connectDB } from "@/utils/database";

// 트윗들을 받아오는 함수
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await connectDB).db("portfolio");

  const idx = Number(req.query.idx);
  const nickname = req.query.nickname;

  if (idx !== undefined) {
    if (req.method === "GET") {
      if (nickname === undefined) {
        const allTwits = await db
          .collection("twits")
          .find()
          .sort({ $natural: -1 })
          .skip(idx)
          .limit(3)
          .toArray();

        return res.status(200).json(allTwits);
      } else {
        const allTwits = await db
          .collection("twits")
          .find({ nickname: nickname })
          .sort({ $natural: -1 })
          .skip(idx)
          .limit(3)
          .toArray();
        return res.status(200).json(allTwits);
      }
    }
  } else {
    return res.status(400).json([]);
  }
}
