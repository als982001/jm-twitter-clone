import { getTwit } from "@/utils/twitFunctions";
import { ITwit } from "@/utils/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useGetTwit() {
  const [twit, setTwit] = useState<ITwit | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = await getTwit(params?.twitId as string);
      setTwit((prev) => result.data);

      setIsLoading((prev) => false);
    })();
  }, []);

  return { twit, isLoading };
}
