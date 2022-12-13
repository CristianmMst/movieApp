import "./NavbarMobile.scss";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import logoPequeño from "@/assets/logoPequeño.svg";
import { Button, SearchInput } from "@/components";

interface NavbarProps {
  fixed?: boolean;
  active?: boolean;
}

export const NavbarMobile = ({ active }: NavbarProps) => {
  const [navScroll, setNavScroll] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [navMobileActive, setNavMobileActive] = useState(false);
  const [moviesModal, setMoviesModal] = useState(false);
  const [seriesModal, setSeriesModal] = useState(false);

  const handleMobile = () => {
    setNavMobileActive(!navMobileActive);
    setActiveMenu(!activeMenu);
  };

  const navBarScroll = () => {
    if (window.scrollY >= 80) setNavScroll(true);
    else setNavScroll(false);
  };
  window.addEventListener("scroll", navBarScroll);

  return (
    <nav
      className={`NavbarMobile${navScroll || active ? " active" : ""}${activeMenu ? " active-mobile" : ""
        }`}
    >
      <div className="NavbarMobile-right">
        <Link to={"/"}>
          <img className="NavbarMobile-logo" src={logo} alt="logo" />
        </Link>
        <div className="NavbarMobile-links">
          <img
            className="NavbarMobile-logo-pequeño"
            src={logoPequeño}
            alt="logo"
          />
          <div className="NavbarMobile-buttons">
            <Button text={"Entrar"} color={"dark"} />
            <Button text={"Registro"} color={"white"} />
          </div>
          <SearchInput />
          <div className="Links">
            <div className="NavbarMobile-links-link">
              <p onClick={() => setMoviesModal(!moviesModal)}>Películas</p>
              {moviesModal ? (
                <ul>
                  <li>Popular</li>
                  <li>Top Rated</li>
                  <li>Upcoming</li>
                </ul>
              ) : null}
            </div>
            <div className="NavbarMobile-links-link">
              <p onClick={() => setSeriesModal(!seriesModal)}>Series</p>
              {seriesModal ? (
                <ul>
                  <li>Popular</li>
                  <li>Top Rated</li>
                  <li>Upcoming</li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="NavbarMobile-menu" onClick={handleMobile}>
        {navMobileActive ? (
          <AiOutlineClose size={30} color="white" />
        ) : (
          <MdOutlineMenu size={30} color="white" />
        )}
      </div>
    </nav>
  );
};
export default NavbarMobile;
