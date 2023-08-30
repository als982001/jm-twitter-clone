import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useEffect, useState } from "react";

export default function useCheckLogin() {
  const [loginData, setLoginData] = useState<any>(null);
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getServerSession(authOptions as any);
      if (session) {
        setLoginData(session);
      } else {
        setLoginData(null);
      }
    };

    fetchSession();
  }, []);

  return loginData;
}
