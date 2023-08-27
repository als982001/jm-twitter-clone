import { IUser } from "@/utils/types";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";

interface ISession {
  user: IUser;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session: ISession | null = await getServerSession(
    req,
    res,
    authOptions
  );

  if (session) {
    return res.status(200).json(session.user);
  } else {
    return res.status(401).json({ error: "Not Authenticated" });
  }
}
