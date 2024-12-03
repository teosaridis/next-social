import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FriendRequestList from "./FriendRequestList";

type Props = {};

const FriendRequests = async (props: Props) => {
  const { userId } = await auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });
  // if (requests.length === 0) return null;

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

      <FriendRequestList requests={requests} />

    </div>
  );
};

export default FriendRequests;
