import { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  aws.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
    region: "ap-northeast-2",
    signatureVersion: "v4",
  });

  const s3 = new aws.S3();

  const url = await s3.createPresignedPost({
    Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
    Fields: { key: req.query.file },
    Expires: 60, // seconds
    Conditions: [
      ["content-length-range", 0, 5242880], //파일용량 1MB 까지 제한
    ],
  });

  res.status(200).json(url);
}
