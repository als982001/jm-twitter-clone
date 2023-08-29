import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
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

  const user = await db
    .collection("user_cred")
    .findOne({ _id: new ObjectId(session.user?._id) });

  if (user === null) {
    return res.status(400).json("나중에 다시 시도해주세요.");
  }

  const { commentId } = req.query;

  if (commentId === undefined) {
    return res.status(400).json("나중에 다시 시도하세요.");
  }

  if (req.method === "PATCH") {
    const comment = await db
      .collection("comments")
      .findOne({ _id: new ObjectId(commentId as string) });

    if (comment === null) {
      return res.status(400).json("해당 댓글을 찾을 수 없습니다.");
    }

    // ObjectId는 객체이기에 문자열로 바꾼 후, 비교해야 함
    const included = comment.likes
      .map((id) => id.toString())
      .includes(user._id.toString());

    if (included === true) {
      await db
        .collection("comments")
        .updateOne(
          { _id: new ObjectId(commentId as string) },
          { $pull: { likes: user._id } }
        );

      await db
        .collection("user_cred")
        .updateOne({ _id: user._id }, { $pull: { likes: comment._id } });

      return res.status(200).json("decrease");
    } else {
      await db
        .collection("comments")
        .updateOne(
          { _id: new ObjectId(commentId as string) },
          { $push: { likes: user._id } }
        );

      await db
        .collection("user_cred")
        .updateOne({ _id: user._id }, { $push: { likes: comment._id } });

      return res.status(200).json("increase");
    }

    return res.status(400).json("나중에 추가될 기능");
  }
}
