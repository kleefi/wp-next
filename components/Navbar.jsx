import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div>Main Menu</div>
      <ul className="flex">
        <li className="bg-red-100 px-4 py-2">
          <Link href="/">Home</Link>
        </li>
        <li className="bg-red-100 px-4 py-2">
          <Link href="/about">About</Link>
        </li>
        <li className="bg-red-100 px-4 py-2">
          <Link href="/contact">contact</Link>
        </li>
        <li className="bg-red-100 px-4 py-2">
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
