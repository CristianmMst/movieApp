import NavbarPc from "@/components/Navbar/NavbarPC/NavbarPC";
import NavbarMobile from "@/components/Navbar/NavbarMobile/NavbarMobile";

export function Navbar() {
  const width = window.screen.width;
  return <>{width < 700 ? <NavbarMobile /> : <NavbarPc />}</>;
}

export default Navbar;
