import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default function Home() {
  let session = await getServerSession(authOptions);

  return <div>Home!</div>;
}
