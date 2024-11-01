"use client";

import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const MobileMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          }  origin-left ease-in-out duration-500`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-20 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-4 font-medium text-xl z-10">
          <Link href="/" className="hover:text-blue-800 hover:underline">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-800 hover:underline">
            Friends
          </Link>
          <Link href="/" className="hover:text-blue-800 hover:underline">
            Groups
          </Link>
          <Link href="/" className="hover:text-blue-800 hover:underline">
            Stories
          </Link>
          <Link href="/" className="hover:text-blue-800 hover:underline">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
