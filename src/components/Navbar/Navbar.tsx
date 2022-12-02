import "./Navbar.scss";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

interface NavbarProps {
  fixed?: boolean;
  active?: boolean;
}

const Navbar = ({ fixed, active }: NavbarProps) => {
  const [navScroll, setNavScroll] = useState(!fixed);
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
      <div className={`Mobile ${navMobileActive ? "active" : ""}`}></div>
      <nav
        className={`${navScroll ? "Navbar active" : "Navbar"} ${active ? "Navbar active" : "Navbar"
          }`}
        style={{ position: active ? "static" : "fixed" }}
      >
        <div className="Navbar-right">
          <img className="Navbar-logo" src={logo} alt="logo" />
          <a className="Navbar-link" href="#">
            Género
          </a>
          <a className="Navbar-link" href="#">
            Películas
          </a>
          <a className="Navbar-link" href="#">
            Series
          </a>
        </div>
        <div className="search">
          <input type={"text"} placeholder="Buscar películas" />
          <button type={"button"}>
            <FiSearch className="icon" size={24} />
          </button>
        </div>
        <div className="Navbar-mobile" onClick={handleMobile}>
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
export default Navbar;
