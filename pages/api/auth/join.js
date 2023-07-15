import { connectDB } from "@/utils/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  let db = (await connectDB).db("portfolio");

  if (req.method === "POST") {
    const body = await JSON.parse(req.body);
    const { id, email, password } = body;

    console.log(`id: ${id}  password: ${password}  email: ${email}`);

    const hash = await bcrypt.hash(password, 10);

    if (id.length === 0 || email.length === 0 || password.length === 0) {
      return res.status(500).json("빈 칸 없게 하세요!");
    }

    let sameEmailAccount = await db
      .collection("user_cred")
      .findOne({ email: email });

    console.log(sameEmailAccount);

    if (sameEmailAccount) {
      return res.status(500).json("중복 계정이 존재합니다.");
    }

    const newAccount = { id, email, password: hash };

    await db.collection("user_cred").insertOne(newAccount);

    // res.status(200).redirect(302, "/"); => <form method="POST" action="~~"> 경우엥 이용
    res.status(201).json("계정 생성!");
  }
}
