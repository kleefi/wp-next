"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const activeMenu = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="mx-auto bg-orange-400">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-2 py-4 md:px-0">
          <div className="text-4xl font-bold">
            <Link href="/">Logo.</Link>
          </div>
          {nav}
          <button
            onClick={activeMenu}
            className="flex cursor-pointer md:hidden"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
          <ul
            className={`capitalize md:flex md:flex-row md:space-x-4 md:bg-transparent md:p-4 ${
              nav
                ? "absolute right-6 top-12 flex-col rounded-md bg-orange-300 p-4 font-normal leading-normal duration-100 ease-in-out"
                : "hidden md:flex"
            }`}
          >
            <li className="px-2 hover:font-bold hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="px-2 hover:font-bold hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="px-2 hover:font-bold hover:underline">
              <Link href="/contact">contact</Link>
            </li>
            <li className="px-2 hover:font-bold hover:underline">
              <Link href="/blog">blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
