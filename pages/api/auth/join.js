import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  let db = (await connectDB).db("portfolio");

  if (req.method === "POST") {
    const body = await JSON.parse(req.body);
    const { nickname, email, password, password2, imageUrl } = body;
    console.log(body);

    const hash = await bcrypt.hash(password, 10);

    console.log(`imageUrl: ${imageUrl}`);

    if (password !== password2) {
      return res.status(400).json("비밀번호가 다릅니다");
    }

    if (nickname.length === 0 || email.length === 0 || password.length === 0) {
      return res.status(500).json("빈 칸 없게 하세요!");
    }

    let sameEmailAccount = await db
      .collection("user_cred")
      .findOne({ email: email });

    if (sameEmailAccount) {
      return res.status(500).json("중복 계정이 존재합니다.");
    }

    const newAccount = { nickname, email, password: hash, imageUrl, twits: [] };

    console.log(newAccount);

    const result = await db.collection("user_cred").insertOne(newAccount);

    console.log(result);

    // res.status(200).redirect(302, "/"); => <form method="POST" action="~~"> 경우엥 이용
    res.status(201).json("계정 생성!");
  }
}
