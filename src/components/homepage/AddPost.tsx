import Image from "next/image";
import React from "react";

type Props = {};

const AddPost = (props: Props) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR  */}
      <div className="">
        <Image
          src={
            "https://images.pexels.com/photos/21352813/pexels-photo-21352813/free-photo-of-fishing-motorboat-on-sea.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          }
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      {/* POST  */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What do you think..."
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src={"/emoji.png"}
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addimage.png"} alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addvideo.png"} alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/poll.png"} alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addevent.png"} alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
