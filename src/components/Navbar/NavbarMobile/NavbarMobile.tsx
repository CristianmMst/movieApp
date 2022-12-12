import "./NavbarMobile.scss";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

interface NavbarProps {
  fixed?: boolean;
  active?: boolean;
}

export const NavbarMobile = ({ active }: NavbarProps) => {
  const [navScroll, setNavScroll] = useState(false);
  const [navMobileActive, setNavMobileActive] = useState(false);

  const handleMobile = () => {
    setNavMobileActive(!navMobileActive);
  };

  const navBarScroll = () => {
    if (window.scrollY >= 80) setNavScroll(true);
    else setNavScroll(false);
  };
  window.addEventListener("scroll", navBarScroll);

  return (
    <>
      <div className={`Mobile${navMobileActive ? " active" : ""}`}>
        <div className="search">
          <input type={"text"} placeholder="Buscar películas" />
          <button type={"button"}>
            <FiSearch className="icon" size={24} />
          </button>
        </div>
        <Link to="#">Películas</Link>
        <Link to="#">Series</Link>
      </div>
      <nav className={`Navbar-mobile${navScroll || active ? " active" : ""}`}>
        <div className="Navbar-right">
          <Link to={"/"}>
            <img className="Navbar-logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="Navbar-mobile-menu" onClick={handleMobile}>
          {navMobileActive ? (
            <AiOutlineClose size={30} color="white" />
          ) : (
            <MdOutlineMenu size={30} color="white" />
          )}
        </div>
      </nav>
    </>
  );
};
export default NavbarMobile;
