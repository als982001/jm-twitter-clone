import { useEffect, useRef, useState } from "react";

interface ITwit {
  createdDate: string;
  email: string;
  imageUrl: string;
  twit: string;
  id: string;
  author: string;
}

export default function useGetTwits() {
  const offset = 3;
  const [twits, setTwits] = useState<ITwit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idx, setIdx] = useState(0);
  const moreLoading = useRef(true);

  useEffect(() => {
    (async () => {
      setIsLoading((prev) => true);

      const response = await fetch(
        `http://localhost:3000/api/twits?idx=${idx}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();

      const _twits = result.map((_twit) => {
        return { ..._twit, id: _twit._id.toString() };
      });
      setTwits((prev) => _twits);

      setIsLoading((prev) => false);
      moreLoading.current = false;
    })();
  }, []);

  const getAdditionalTwits = async () => {
    if (moreLoading.current === false) {
      moreLoading.current = true;

      const additionalTwits = await (
        await fetch("http://localhost:3000/api/twits", {
          method: "GET",
        })
      ).json();

      setTwits((prev) => {
        const allTwits = [...prev, ...additionalTwits];
        return allTwits;
      });

      moreLoading.current = false;
    }
  };

  useEffect(() => {
    console.log(twits);
  }, [twits]);

  return { twits, isLoading, moreLoading, getAdditionalTwits };
}
