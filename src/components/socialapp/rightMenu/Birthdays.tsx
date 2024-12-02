import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Birthdays = (props: Props) => {
  return (
    <div className="p-4 rounded-lg shadow-md text-sm flex flex-col gap-4 bg-white">
      {/* TOP  */}
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* USER END  */}

      {/* UPCOMING  */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src={"/gift.png"} alt="" width={24} height={24} />
        <Link href={"/"} className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">See 16 more upcoming Birthdays</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
