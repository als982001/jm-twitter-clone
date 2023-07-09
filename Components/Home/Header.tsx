import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="home-header">
      <section className="hamburger-button">
        <GiHamburgerMenu size={"30px"} />
      </section>
      <input className="home-input" placeholder="메일에서 검색" />
      <section className="icon header-user" />
    </header>
  );
}
