"use client";

import { useState } from "react";

export default function useShowType() {
  const [isRecommend, setIsRecommend] = useState(true);

  const handleModeChange = (showType: boolean) => {
    setIsRecommend((prev) => showType);
  };

  return [isRecommend, handleModeChange];
}
