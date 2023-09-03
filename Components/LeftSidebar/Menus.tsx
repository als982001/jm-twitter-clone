import {
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlineUser,
  AiTwotoneHome,
} from "react-icons/ai";
import Menu from "./Menu";
import styles from "./LeftSidebar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsBell, BsBookmark } from "react-icons/bs";
import { CiCircleMore, CiViewList } from "react-icons/ci";
import { IUser, defaultUser } from "@/utils/types";

interface IProps {
  userInfo: IUser | null;
}

export default function Menus({ userInfo = defaultUser }: IProps) {
  return (
    <>
      <Menu path="/">
        <AiTwotoneHome className={styles.sidebar__menu__logo} path="/" />
        <h5>홈</h5>
      </Menu>
      <Menu path="/maintenance">
        <FaMagnifyingGlass className={styles.sidebar__menu__logo} />
        <h5>탐색하기</h5>
      </Menu>
      <Menu path="/maintenance">
        <BsBell className={styles.sidebar__menu__logo} />
        <h5>알림</h5>
      </Menu>
      <Menu path="/maintenance">
        <AiOutlineMail className={styles.sidebar__menu__logo} />
        <h5>쪽지</h5>
      </Menu>
      <Menu path="/maintenance">
        <CiViewList className={styles.sidebar__menu__logo} />
        <h5>리스트</h5>
      </Menu>
      <Menu path="/bookmarks">
        <BsBookmark className={styles.sidebar__menu__logo} />
        <h5>북마크</h5>
      </Menu>
      <Menu path="/maintenance">
        <AiOutlineCheckCircle className={styles.sidebar__menu__logo} />
        <h5>인증됨</h5>
      </Menu>
      <Menu path={`/${userInfo?.nickname}`}>
        <AiOutlineUser className={styles.sidebar__menu__logo} />
        <h5>프로필</h5>
      </Menu>
      <Menu path="/maintenance">
        <CiCircleMore className={styles.sidebar__menu__logo} />
        <h5>더 보기</h5>
      </Menu>
    </>
  );
}
