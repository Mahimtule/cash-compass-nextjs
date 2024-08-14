import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white flex justify-between items-center border-b sticky top-0">
      <Link href="/" className="text-xl font-bold text-green-700">
        CashCompass
      </Link>
    </nav>
  );
};

export default NavBar;
