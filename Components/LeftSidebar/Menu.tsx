"use client";

import styles from "./LeftSidebar.module.css";
import { ReactNode } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface IProps {
  children: ReactNode;
  path: string;
}

export default function Menu({ children, path }: IProps) {
  let pathName = usePathname();

  return (
    <Link href={path as string} className={styles.sidebar__menu}>
      <li
        className={styles.sidebar__menu}
        style={{ fontWeight: path === pathName ? "900" : "500" }}
      >
        <section className={styles.sidebar__menu__texts}>{children}</section>
      </li>
    </Link>
  );
}
