import { useState } from "react";

export default function useTwitModal() {
  const [openModal, setOpenModal] = useState(false);

  return { openModal, setOpenModal };
}
