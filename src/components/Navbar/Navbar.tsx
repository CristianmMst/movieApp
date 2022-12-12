import { useState } from "react";
import { NavbarMobile, NavbarPC } from "@/components";

interface NavbarProps {
  active?: boolean;
}

export function Navbar({ active }: NavbarProps) {
  const [width, setWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setWidth(window.screen.width);
  });
  return (
    <>
      {width < 700 ? (
        <NavbarMobile active={active} />
      ) : (
        <NavbarPC active={active} />
      )}
    </>
  );
}

export default Navbar;
