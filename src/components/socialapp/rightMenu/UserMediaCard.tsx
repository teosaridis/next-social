import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = { user: User };

const UserMediaCard = (props: Props) => {
  return (
    <div className="p-4 rounded-lg shadow-md text-sm bg-white flex flex-col gap-4">
      {/* TOP  */}
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link className="text-blue-500 text-xs" href={"/"}>
          See all
        </Link>
      </div>
      {/* BOTTON  */}
      <div className="flex flex-wrap-reverse gap-4 justify-between">
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        {/* DUMMY IMAGES  */}
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>{" "}
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>{" "}
        <div className="relative w-1/5 h-24">
          <Image
            src={
              "https://images.pexels.com/photos/15201062/pexels-photo-15201062/free-photo-of-view-of-green-field-from-train-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        {/* DUMMY IMAGES END  */}
      </div>
    </div>
  );
};

export default UserMediaCard;
