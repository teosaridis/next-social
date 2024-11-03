import Image from "next/image";
import React from "react";

type Props = {};

const Stories = (props: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>

        {/* DUMMY STORIES  */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/29175346/pexels-photo-29175346/free-photo-of-solitary-sailboat-on-serene-lake-with-mountainous-backdrop.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Teo</span>
        </div>
        {/* DUMMY STORIES END  */}
      </div>
    </div>
  );
};

export default Stories;
