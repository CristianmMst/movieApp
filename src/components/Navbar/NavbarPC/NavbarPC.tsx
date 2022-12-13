import "./NavbarPC.scss";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "@/components";

interface NavbarProps {
  active?: boolean;
}

export const NavbarPC = ({ active }: NavbarProps) => {
  const [navScroll, setNavScroll] = useState(false);

  const navBarScroll = () => {
    if (window.scrollY >= 80) setNavScroll(true);
    else setNavScroll(false);
  };
  window.addEventListener("scroll", navBarScroll);

  return (
    <nav className={`Navbar${navScroll || active ? " active" : ""}`}>
      <div className="Navbar-right">
        <Link to={"/"}>
          <img className="Navbar-right-logo" src={logo} alt="logo" />
        </Link>
        <Link className="Navbar-right-link" to="">
          Películas
        </Link>
        <Link className="Navbar-right-link" to="">
          Series
        </Link>
      </div>
      <SearchInput />
    </nav>
  );
};
export default NavbarPC;
