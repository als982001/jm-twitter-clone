import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await connectDB).db("portfolio");

  const _commentIds: string[] = req.body;
  const commentIds = _commentIds.map((id) => new ObjectId(id));

  const comments = await db
    .collection("comments")
    .find({ _id: { $in: commentIds } })
    .toArray();

  return res.status(200).json(comments);
}
