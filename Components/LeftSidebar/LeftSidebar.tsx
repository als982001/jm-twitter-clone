"use client";

import styles from "./LeftSidebar.module.css";
import SidebarUser from "./SidebarUser";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { ITwit, IUser } from "@/utils/types";
import TwitButton from "./TwitButton";
import Menus from "./Menus";
import Icon from "./Icon";
import useTwitModal from "@/Hooks/useTwitModal";
import useGetUserInfo from "@/Hooks/useGetUserInfo";
import Overlay from "../Overlay";
import TwitModal from "../Modal/TwitModal";

interface IServerSession {
  user: IUser;
}

export default function LeftSidebar() {
  const { userInfo, isLoading } = useGetUserInfo();
  const { openModal, setOpenModal } = useTwitModal();

  return (
    <>
      <nav id={styles.sidebar}>
        <ul className={styles.sidebar__menus}>
          <Icon />
          <Menus userInfo={userInfo} />
          {userInfo && (
            <TwitButton
              onClick={() => {
                setOpenModal(true);
              }}
            />
          )}
        </ul>
        <SidebarUser user={userInfo} />
      </nav>
      {openModal && (
        <>
          <Overlay
            onClick={() => {
              setOpenModal(false);
            }}
          />
          <TwitModal setOpenModal={setOpenModal} />
        </>
      )}
    </>
  );
}
