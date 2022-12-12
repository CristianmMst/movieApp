import "./NavbarPC.scss";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

interface NavbarProps {
  fixed?: boolean;
  active?: boolean;
}

export const Navbar = ({ active }: NavbarProps) => {
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
          <img className="Navbar-logo" src={logo} alt="logo" />
        </Link>
        <Link className="Navbar-right-link" to="">
          Películas
        </Link>
        <Link className="Navbar-right-link" to="">
          Series
        </Link>
      </div>
      <div className="search">
        <input type={"text"} placeholder="Buscar películas" />
        <button type={"button"}>
          <FiSearch className="icon" size={24} />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
