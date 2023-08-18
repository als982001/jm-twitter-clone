import { IUser } from "@/utils/types";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

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
    return res.status(200).json(null);
  }
}
