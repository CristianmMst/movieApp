import { useState } from "react";
import "../../styles/NavBar/Navbar.scss";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput/SearchInput";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  const navBarScroll = () => {
    if (window.scrollY >= 80) setNavScroll(true);
    else setNavScroll(false);
  };
  window.addEventListener("scroll", navBarScroll);

  return (
    <nav className={navScroll ? "Navbar active" : "Navbar"}>
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
      <SearchInput />
    </nav>
  );
};
export default Navbar;
