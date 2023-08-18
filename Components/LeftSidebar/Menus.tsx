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

export default function Menus() {
  return (
    <>
      <Menu path="/">
        <AiTwotoneHome className={styles.sidebar__menu__logo} path="/" />
        <h5>홈</h5>
      </Menu>
      <Menu path="/explore">
        <FaMagnifyingGlass className={styles.sidebar__menu__logo} />
        <h5>탐색하기</h5>
      </Menu>
      <Menu path="/notifications">
        <BsBell className={styles.sidebar__menu__logo} />
        <h5>알림</h5>
      </Menu>
      <Menu path="/messages">
        <AiOutlineMail className={styles.sidebar__menu__logo} />
        <h5>쪽지</h5>
      </Menu>
      <Menu path="/lists">
        <CiViewList className={styles.sidebar__menu__logo} />
        <h5>리스트</h5>
      </Menu>
      <Menu path="/bookmarks">
        <BsBookmark className={styles.sidebar__menu__logo} />
        <h5>북마크</h5>
      </Menu>
      <Menu path="/verified-choose">
        <AiOutlineCheckCircle className={styles.sidebar__menu__logo} />
        <h5>인증됨</h5>
      </Menu>
      <Menu path="/username">
        <AiOutlineUser className={styles.sidebar__menu__logo} />
        <h5>프로필</h5>
      </Menu>
      <Menu path="/more">
        <CiCircleMore className={styles.sidebar__menu__logo} />
        <h5>더 보기</h5>
      </Menu>
    </>
  );
}
