import { checkLogin } from "@/utils/functions";
import { IUser } from "@/utils/types";
import { useEffect, useState } from "react";

export default function useGetUserInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = await checkLogin();

      if (result.data) {
        setUserInfo(result.data);
      }

      setIsLoading((prev) => false);
    })();
  }, []);

  return { userInfo, isLoading };
}
