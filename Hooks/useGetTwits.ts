import { getTwitsFromIndex } from "@/utils/twitFunctions";
import { ITwit } from "@/utils/types";
import { useEffect, useRef, useState } from "react";

interface IResult {
  data: ITwit[];
  status: number;
}

export default function useGetTwits() {
  const offset = 3;
  const [twits, setTwits] = useState<ITwit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idx, setIdx] = useState(0);

  const finishInitSetting = useRef(false);
  const isAdding = useRef(true);

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const result: IResult = await getTwitsFromIndex(0);

      const _twits = result.data.map((_twit) => {
        return { ..._twit, id: _twit._id.toString() };
      });
      setTwits((prev) => _twits);

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
        const result: IResult = await getTwitsFromIndex(idx);

        setTwits((prev) => [...prev, ...result.data]);
      }
    })();
  }, [idx]);

  return { twits, isLoading, addIndex };
}
