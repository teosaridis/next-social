import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ads from "../Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";
import { Suspense } from "react";

const RightMenu = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
