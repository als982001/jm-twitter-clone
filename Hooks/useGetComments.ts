import { getComments } from "@/utils/twitFunctions";
import { IComment } from "@/utils/types";
import { useEffect, useState } from "react";

export default function useGetComments(commentIds: string[]) {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = await getComments(commentIds);

      setComments((prev) => result.data);

      setIsLoading((prev) => false);
    })();
  }, []);

  return { isLoading, comments };
}
