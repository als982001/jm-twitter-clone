import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/utils/database";
import { getCurrentTime, getNameFromEmail } from "@/app/Functions/Functions";
import { NextApiRequest, NextApiResponse } from "next";

interface IUser {
  user: {
    name?: string;
    email: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let db = (await connectDB).db("portfolio");

  const session: IUser | null = await getServerSession(req, res, authOptions);

  console.log(session);

  if (req.method === "POST") {
    const newTwit = await JSON.parse(req.body);
    const createdDate = getCurrentTime();

    if (session === null) {
      return res.status(401).json("로그인이 필요한 서비스입니다.");
    }

    if (newTwit.content.length === 0) {
      return res.status(400).json("내용을 입력해주세요.");
    }

    await db.collection("twits").insertOne({
      author: session.user?.name || getNameFromEmail(session.user?.email),
      email: session.user?.email,
      twit: newTwit.content,
      imageUrl: newTwit.imageUrl,
      createdDate,
    });

    res.status(201).json("성공!");
  }
}
