import { getCommentsByNickname } from "@/utils/twitFunctions";
import { IComment } from "@/utils/types";
import { useEffect, useRef, useState } from "react";

export default function useGetCommentsByUesr(nickname: string) {
  const offset = 3;
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idx, setIdx] = useState(0);

  const finishInitSetting = useRef(false);
  const isAdding = useRef(true);

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = await getCommentsByNickname(nickname, idx);
      console.log(result);
      setComments((prev) => result.data);

      setIsLoading((prev) => false);

      finishInitSetting.current = true;
      isAdding.current = false;
    })();
  }, []);

  const addIndex = () => {
    if (isAdding.current === false && finishInitSetting.current === true) {
      isAdding.current = true;

      setIdx((prev) => prev + offset);

      isAdding.current = false;
    }
  };

  useEffect(() => {
    (async () => {
      if (isAdding.current === false) {
        const result = await getCommentsByNickname(nickname, idx);

        setComments((prev) => [...prev, ...result.data]);
      }
    })();
  }, [idx]);

  return { isLoading, comments, addIndex };
}
