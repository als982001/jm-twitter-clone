"use client";

import styles from "./LeftSidebar.module.css";
import SidebarUser from "./SidebarUser";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { ITwit, IUser } from "@/utils/types";
import TwitButton from "./TwitButton";
import Menus from "./Menus";
import Icon from "./Icon";
import useGetUserInfo from "@/Hooks/useGetUserInfo";
import Overlay from "../Overlay";
import TwitModal from "../Modal/TwitModal";
import useShowModal from "@/Hooks/useShowModal";
import { useState } from "react";
import UserInfoModal from "../Modal/UserInfoModal";

interface IServerSession {
  user: IUser;
}

export default function LeftSidebar() {
  const { userInfo, isLoading } = useGetUserInfo();
  const [showTwitModal, setShowTwitModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <>
      <nav id={styles.sidebar}>
        <ul className={styles.sidebar__menus}>
          <Icon />
          <Menus userInfo={userInfo} />
          {userInfo && (
            <TwitButton
              onClick={() => {
                setShowTwitModal(true);
              }}
            />
          )}
        </ul>
        <SidebarUser user={userInfo} setShowUserModal={setShowUserModal} />
      </nav>
      {showTwitModal && (
        <>
          <Overlay
            onClick={() => {
              setShowTwitModal(false);
            }}
          />
          <TwitModal setShowTwitModal={setShowTwitModal} />
        </>
      )}
      {showUserModal && userInfo && (
        <>
          <Overlay
            onClick={() => {
              setShowUserModal(false);
            }}
          />
          <UserInfoModal user={userInfo} />
        </>
      )}
    </>
  );
}
