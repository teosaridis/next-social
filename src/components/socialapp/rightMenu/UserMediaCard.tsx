import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = { user: User };

const UserMediaCard = async (props: Props) => {
  const postsWithMedia = await prisma.socialPost.findMany({
    where: {
      userId: props.user.id,
      img: { not: null },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-4 rounded-lg shadow-md text-sm bg-white flex flex-col gap-4">
      {/* TOP  */}
      <div className=" flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link className="text-blue-500 text-xs" href={"/"}>
          See all
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="flex flex-wrap-reverse gap-4 justify-between">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div className="relative w-1/5 h-24" key={post.id}>
                <Image
                  src={post.img!}
                  alt=""
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))
          : "No media found!"}
      </div>
    </div>
  );
};

export default UserMediaCard;
