import { checkLogin } from "@/utils/functions";
import { IUser } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useGetUserInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = await checkLogin();

      if (result?.data) {
        setUserInfo(result.data);
      } else {
        router.push("/join");
      }

      setIsLoading((prev) => false);
    })();
  }, []);

  return { userInfo, isLoading };
}
