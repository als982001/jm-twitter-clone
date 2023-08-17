import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { connectDB } from "@/utils/database";
import { getCurrentTime, getNameFromEmail } from "@/app/Functions/Functions";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { IUser } from "@/utils/types";

interface ISession {
  user: IUser;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let db = (await connectDB).db("portfolio");

  const session: ISession | null = await getServerSession(
    req,
    res,
    authOptions
  );

  if (session === null || session.user === null) {
    return res.status(401).json("로그인 후 다시 시도해주세요.");
  }

  if (req.method === "POST") {
    try {
      const newTwit = await JSON.parse(req.body);
      const createdDate = getCurrentTime();

      if (newTwit.content.length === 0) {
        return res.status(400).json("내용을 입력해주세요.");
      }

      const user: IUser | null = await db
        .collection("user_cred")
        .findOne({ _id: new ObjectId(session.user._id) });

      if (user === null) {
        return res.status(400).json("나중에 다시 시도해주세요.");
      }

      const { insertedId } = await db.collection("twits").insertOne({
        nickname: user.nickname,
        authorId: user._id,
        authorIcon: user.imageUrl,
        email: user.email,
        twit: newTwit.content,
        imageUrl: newTwit.imageUrl,
        createdDate,
      });

      // user의 twits 배열에 새로 추가된 twit의 ID를 push합니다.
      await db
        .collection("user_cred")
        .updateOne({ _id: user._id }, { $push: { twits: insertedId } });

      const addedTwit = await db
        .collection("twits")
        .findOne({ _id: insertedId });

      res.status(201).json(addedTwit);
    } catch (error) {
      return res.status(400).json("나중에 다시 시도해주세요.");
    }
  }
}
