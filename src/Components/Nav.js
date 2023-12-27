"use client";

import { useState } from "react";

export default function Nav() {
  // Toggle nav:
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex justify-between sticky top-0 z-50 bg-pink-500">
      <ul className="WIDESCREEN w-fit hidden lg:flex list-none text-light text-2xl [&>li]:p-4 items-center">
        <li>
          <a href="#Research">Research</a>
        </li>
        <li>
          <a href="#CV">CV</a>
        </li>
        <li>
          <a href="#Teaching">Teaching</a>
        </li>
        <li>
          <a href="#Resources">Resources</a>
        </li>
      </ul>
      <div
        className="HAMBURGERMENU_openBtn cursor-pointer right-0 p-5 flex flex-col absolute z-50 lg:hidden"
        onClick={toggleMenu}
      >
        <div className="w-7 h-1 bg-black my-1 mx-0"></div>
        <div className="w-7 h-1 bg-black my-1 mx-0"></div>
        <div className="w-7 h-1 bg-black my-1 mx-0"></div>
      </div>
      <ul
        className={
          "MENU_ITEMS flex flex-col fixed top-0 w-full h-full text-light bg-red-500 transition-all ease-in-out delay-300 z-50 list-none mt-0 pt-12 pb-0 pl-0 pr-0 [&>li]:flex [&>li]:justify-center [&>li]:mb-4 [&>li]:text-3xl lg:hidden" +
          (isOpen ? " left-0" : " left-[-100vw]")
        }
      >
        <span
          onClick={toggleMenu}
          className="absolute cursor-pointer top-4 right-4 border-solid border-navyBlue border-2 rounded-full w-0.5 h-0.5 p-6 flex items-center justify-center"
        >
          X
        </span>
        <li onClick={toggleMenu}>
          <a href="#Research">Research</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#CV">CV</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#Teaching">Teaching</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#Resources">Resources</a>
        </li>
      </ul>
    </nav>
  );
}
