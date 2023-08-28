import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

interface IBody {
  likes: string[];
  idx: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Get Likes 시작!!!");
  const db = (await connectDB).db("portfolio");

  console.log(req.body);

  const data: IBody = req.body;

  console.log(data);

  if (
    data === undefined ||
    data.idx === undefined ||
    data.likes === undefined
  ) {
    return res.status(400).json("다음에 다시 시도해주세요.");
  }

  if (req.method === "POST") {
    if (data.idx >= data.likes.length) {
      return res.status(200).json([]);
    }

    const ids = data.likes
      .slice(data.idx, data.idx + 3)
      .map((id) => new ObjectId(id));

    const twits = await db
      .collection("twits")
      .find({ _id: { $in: ids } })
      .toArray();

    return res.status(200).json(twits);
  }

  return res.status(200).json([]);
}
