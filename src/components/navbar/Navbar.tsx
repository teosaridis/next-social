import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-20 flex items-center justify-between">
      {/* LEFT */}
      <div className="lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          Teos Blog
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm justify-end">
        {/* LINKS  */}
        <div className="flex gap-4 text-gray-600">
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Image
              src={"/home.png"}
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Image
              src={"/friends.png"}
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Image
              src={"/stories.png"}
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
