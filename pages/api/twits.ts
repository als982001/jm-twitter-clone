import { twits } from "../../dummydatas/twits";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    return res.status(200).json(twits);
  }
}
