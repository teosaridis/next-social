"use client";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests);

  const acceptFollower = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const declineFollower = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const [optimisticRequest, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: string) => state.filter((req) => req.id !== value)
  );
  return (
    <>
      {requests.length > 0 ? (
        <div>
          {optimisticRequest.map((request) => (
            <div className="flex items-center justify-between" key={request.id}>
              <div className="flex items-center gap-3">
                <Image
                  src={request.sender.avatar || "/noAvatar.png"}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <span className="font-semibold">
                  {request.sender.name && request.sender.surname
                    ? request.sender.name + " " + request.sender.surname
                    : request.sender.username}
                </span>
              </div>
              <div className="flex gap-3 justify-end">
                <form
                  action={() => acceptFollower(request.id, request.sender.id)}
                >
                  <button>
                    <Image
                      src={"/accept.png"}
                      alt=""
                      className="cursor-pointer"
                      width={20}
                      height={20}
                    />
                  </button>
                </form>
                <form
                  action={() => declineFollower(request.id, request.sender.id)}
                >
                  <button>
                    <Image
                      src={"/reject.png"}
                      alt=""
                      className="cursor-pointer"
                      width={20}
                      height={20}
                    />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "No requests..."
      )}
    </>
  );
};

export default FriendRequestList;
