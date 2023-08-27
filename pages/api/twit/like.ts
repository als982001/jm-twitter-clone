import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

// 트윗을 게시하는 함수
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let db = (await connectDB).db("portfolio");

  const session = await getServerSession(req, res, authOptions);

  if (session === null || session.user === null) {
    return res.status(401).json("로그인 후 다시 시도해주세요.");
  }

  const user = await db
    .collection("user_cred")
    .findOne({ _id: new ObjectId(session.user?._id) });

  if (user === null) {
    return res.status(400).json("나중에 다시 시도해주세요.");
  }

  const { twitId } = req.query;

  if (twitId === undefined) {
    return res.status(400).json("나중에 다시 시도하세요.");
  }

  /*
  // likes, follows, followers 배열이 user 문서에 없는 경우에만 배열이 추가됩니다.
  // 배열이 이미 존재하는 경우에는 아무런 작업도 수행되지 않습니다.
  if (!user.likes || !user.follows || !user.followers) {
    await db.collection("user_cred").updateOne(
      { _id: new ObjectId(session.user?._id) },
      {
        $set: {
          likes: [],
          follows: [],
          followers: [],
        },
      }
    );
  }
  */

  if (req.method === "PATCH") {
    const twit = await db
      .collection("twits")
      .findOne({ _id: new ObjectId(twitId as string) });

    if (twit === null) {
      return res.status(400).json("해당 트윗을 찾을 수 없습니다.");
    }

    // ObjectId는 객체이기에 문자열로 바꾼 후, 비교해야 함
    const included = twit.likes
      .map((id) => id.toString())
      .includes(user._id.toString());

    if (included === true) {
      await db
        .collection("twits")
        .updateOne(
          { _id: new ObjectId(twitId as string) },
          { $pull: { likes: user._id } }
        );

      await db
        .collection("user_cred")
        .updateOne({ _id: user._id }, { $pull: { likes: twit._id } });

      return res.status(200).json("decrease");
    } else {
      await db
        .collection("twits")
        .updateOne(
          { _id: new ObjectId(twitId as string) },
          { $push: { likes: user._id } }
        );

      await db
        .collection("user_cred")
        .updateOne({ _id: user._id }, { $push: { likes: twit._id } });

      return res.status(200).json("increase");
    }

    return res.status(400).json("나중에 추가될 기능");
  }
}
