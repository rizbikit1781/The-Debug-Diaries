import React, { useState } from "react";
import LinkButton from "./LinkButton";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image path="/apple-touch-icon.png" width={46} height={46} alt="logo" />
        <span>TheDebugDiaries</span>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden p-4">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img
            src={open ? "/x-mark.png" : "/hamburger-mark.png"}
            alt={open ? "Close Menu" : "Open Menu"}
            width={46}
            height={46}
          />
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 bg-[#EEEEEE] transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <LinkButton href="/">Home</LinkButton>
          <LinkButton href="/">Trending</LinkButton>
          <LinkButton href="/">Most Popular</LinkButton>
          <LinkButton href="/">About</LinkButton>
          <LinkButton href="/" isButton={true}>
            Login 😊
          </LinkButton>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-semibold">
        <LinkButton href="/">Home</LinkButton>
        <LinkButton href="/">Trending</LinkButton>
        <LinkButton href="/">Most Popular</LinkButton>
        <LinkButton href="/">About</LinkButton>
        <LinkButton href="/" isButton={true}>
          Login 😊
        </LinkButton>
      </div>
    </div>
  );
};

export default Navbar;
