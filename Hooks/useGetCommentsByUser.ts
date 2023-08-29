import { IComment } from "@/utils/types";
import { useEffect, useRef, useState } from "react";

export default function useGetCommentsByUesr() {
  const offset = 3;
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idx, setIdx] = useState(0);

  const finishInitSetting = useRef(false);
  const isAdding = useRef(true);

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result = { status: 200, data: [] };

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
      const result = { status: 200, data: [] };

      setComments((prev) => [...prev, ...result.data]);
    })();
  }, [idx]);

  return { isLoading, comments, addIndex };
}
