import Image from "next/image";
import React from "react";
import Comments from "./Comments";

type Props = {};

const Post = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/21352813/pexels-photo-21352813/free-photo-of-fishing-motorboat-on-sea.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Theo Saris</span>
        </div>
        <Image src={"/more.png"} width={16} height={16} alt="" />
      </div>
      {/* DESC  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/28905419/pexels-photo-28905419/free-photo-of-city-of-arts-and-sciences-in-valencia-spain.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            fill
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          aperiam exercitationem modi! Commodi, nulla ipsum. Temporibus tenetur,
          ut quaerat omnis, at perferendis ipsa cum quasi voluptate incidunt
          laudantium excepturi suscipit.
        </p>
      </div>
      {/* INTERACTION  */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/like.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              125<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/comment.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              125<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/share.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              125<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
