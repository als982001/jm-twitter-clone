import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSelectProfileMenu() {
  const [menu, setMenu] = useState("posts");

  const router = useRouter();

  const selectMenu = (selected: string) => {
    setMenu((prev) => selected);
  };

  return { menu, selectMenu };
}
