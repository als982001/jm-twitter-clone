"use client";

interface IProps {
  children: React.ReactNode;
}

import React from "react";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: IProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
