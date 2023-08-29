import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { IUser } from "@/utils/types";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await connectDB).db("portfolio");

  const session = await getServerSession(req, res, authOptions);

  if (session === null || session.user === null) {
    return res.status(401).json("로그인 후 다시 시도해주세요.");
  }

  const user: IUser = session.user as IUser;
  const twitId: string = req.query.twitId as string;
  const comment = req.body;

  const twit = await db
    .collection("twits")
    .findOne({ _id: new ObjectId(twitId) });

  if (twit === null) {
    return res.status(400).json("다음에 다시 이용해주세요.");
  }

  // 1. 코멘트를 만든 후 저장한다.
  const { insertedId } = await db.collection("comments").insertOne({
    comment,
    authorId: new ObjectId(user?._id),
    nickname: user.nickname,
    email: user.email,
    authorImageUrl: user?.imageUrl,
    twit: new ObjectId(twitId),
    likes: 0,
    views: 0,
  });

  // 2. 트윗에 코멘트를 추가한다.
  await db
    .collection("twits")
    .updateOne(
      { _id: new ObjectId(twitId) },
      { $push: { comments: insertedId } }
    );

  // 3. 유저에 코멘트를 추가한다.
  await db
    .collection("user_cred")
    .updateOne(
      { _id: new ObjectId(user._id) },
      { $push: { comments: insertedId } }
    );

  const newComment = await db
    .collection("comments")
    .findOne({ _id: insertedId });

  if (newComment) {
    return res.status(201).json(newComment);
  } else {
    return res.status(400).json(null);
  }
}
