import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInfoCardInteraction from "./userInfoCardInteraction";
import UpdateUser from "./UpdateUser";

type Props = { user: User };

const UserInfoCard = async (props: Props) => {
  const createdAtDate = new Date(props.user.createdAt);

  const formatedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = await auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockedId: currentUserId,
        blockerId: props.user.id,
      },
    });
    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: props.user.id,
      },
    });
    followRes ? (isFollowing = true) : (isFollowing = false);

    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: props.user.id,
      },
    });
    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <div className="p-4 rounded-lg shadow-md text-sm bg-white flex flex-col gap-4">
      {/* TOP  */}
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {currentUserId === props.user.id ? (
          <UpdateUser />
        ) : (
          <Link className="text-blue-500 text-xs" href={"/"}>
            See all
          </Link>
        )}
      </div>
      {/* BOTTOM  */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {" "}
            {props.user.name && props.user.surname
              ? props.user.name + " " + props.user.surname
              : props.user.username}
          </span>
          <span className="text-sm">@{props.user.username}</span>
        </div>
        {props.user.desc && <p>{props.user.desc}</p>}
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>{props.user.city}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>{props.user.school}</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>{props.user.work}</b>
          </span>
        </div>
        {props.user.website && (
          <div className="flex gap-2 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />

            <Link
              href={props.user.website}
              target="_blank"
              className="text-blue-500 font-medium"
            >
              {props.user.website}
            </Link>
          </div>
        )}
        <div className="flex gap-2 items-center">
          <Image src="/date.png" alt="" width={16} height={16} />
          <span className="text-xs">Joined {formatedDate}</span>
        </div>

        {currentUserId && currentUserId !== props.user.id && (
          <UserInfoCardInteraction
            userId={props.user.id}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
