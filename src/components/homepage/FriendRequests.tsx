import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const FriendRequests = (props: Props) => {
  return (
    <div className="p-4 rounded-lg shadow-md text-sm bg-white flex flex-col gap-4">
      {/* TOP  */}
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link className="text-blue-500 text-xs" href={"/"}>
          See all
        </Link>
      </div>
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={
              "https://images.pexels.com/photos/12980707/pexels-photo-12980707.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Plousia Sar</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src={"/reject.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={
              "https://images.pexels.com/photos/12980707/pexels-photo-12980707.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Plousia Sar</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src={"/reject.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={
              "https://images.pexels.com/photos/12980707/pexels-photo-12980707.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Plousia Sar</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src={"/reject.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={
              "https://images.pexels.com/photos/12980707/pexels-photo-12980707.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Plousia Sar</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src={"/reject.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
