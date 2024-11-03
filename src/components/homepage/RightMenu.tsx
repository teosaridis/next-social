import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfoCard from "../user/UserInfoCard";
import UserMediaCard from "../user/UserMediaCard";

const RightMenu = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
