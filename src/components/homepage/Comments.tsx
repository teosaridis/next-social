import Image from "next/image";
import React from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div>
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/26976130/pexels-photo-26976130/free-photo-of-a-view-of-boats-on-the-water-near-the-coast.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS  */}
      <div className="">
        {/* COMMENT  */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR  */}
          <Image
            src={
              "https://images.pexels.com/photos/26976130/pexels-photo-26976130/free-photo-of-a-view-of-boats-on-the-water-near-the-coast.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESC  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium ">Bed Den</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto atque consectetur magnam nihil. Omnis fuga mollitia
              dolores fugiat in quas quidem aperiam, optio aliquid qui error
              eius aspernatur odit ea?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-3 h-3"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">1444 Likes</span>
              </div>
              <div className="cursor-pointer">Reply</div>
            </div>
          </div>
          {/* ICON  */}
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
