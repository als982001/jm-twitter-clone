import { useState } from "react";

export default function useTwit() {
  const [content, setContent] = useState("");

  const writeTwit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent((prev) => event.target.value);
  };

  const postTwit = (event: any) => {
    event.preventDefault();

    console.log(`content: ${content}`);
  };

  return { content, writeTwit, postTwit };
}
