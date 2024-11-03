import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { userId: string };

const UserInfoCard = (props: Props) => {
  return (
    <div className="p-4 rounded-lg shadow-md text-sm bg-white flex flex-col gap-4">
      {/* TOP  */}
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link className="text-blue-500 text-xs" href={"/"}>
          See all
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Lloyd Fleming</span>
          <span className="text-sm">Lloyd Fleming</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          obcaecati ipsa aliquam adipisci corrupti.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Zaros</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>Moires High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Aple Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href={"/"} className="text-blue-500 font-medium">
              Linktree
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span className="text-xs">Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-sm cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
