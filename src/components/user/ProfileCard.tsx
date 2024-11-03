import Image from "next/image";
import React from "react";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={
            "https://images.pexels.com/photos/21352813/pexels-photo-21352813/free-photo-of-fishing-motorboat-on-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={
            "https://images.pexels.com/photos/29070341/pexels-photo-29070341/free-photo-of-elegant-african-woman-with-parasol-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Theo Saridakis</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={
                "https://images.pexels.com/photos/29070341/pexels-photo-29070341/free-photo-of-elegant-african-woman-with-parasol-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src={
                "https://images.pexels.com/photos/29070341/pexels-photo-29070341/free-photo-of-elegant-african-woman-with-parasol-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src={
                "https://images.pexels.com/photos/29070341/pexels-photo-29070341/free-photo-of-elegant-african-woman-with-parasol-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
