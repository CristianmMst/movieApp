import "./NavbarPC.scss";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
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
        <div className="Navbar-movies">
          <p className="Navbar-right-link">Películas</p>
          <div className="dropdown-menu">
            <ul>
              <li>
                <Link to="movie/popular">Populares</Link>
              </li>
              <li>
                <Link to="movie/top_rated">Mejor valoradas</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Navbar-series">
          <p className="Navbar-right-link">Series</p>
          <div className="dropdown-menu">
            <ul>
              <li>
                <Link to="movie/popular">Populares</Link>
              </li>
              <li>
                <Link to="movie/top_rated">Mejor valoradas</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SearchInput />
    </nav>
  );
};
export default NavbarPC;
