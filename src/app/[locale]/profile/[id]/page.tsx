import LeftMenu from "@/components/homepage/LeftMenu";
import PostFeed from "@/components/homepage/PostFeed";
import RightMenu from "@/components/homepage/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* <h1>{t("title")}</h1> */}
      {/* LEFT  */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      {/* CENTER  */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={
                  "https://images.pexels.com/photos/28874274/pexels-photo-28874274/free-photo-of-colorful-monorail-in-busan-south-korea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src={
                  "https://images.pexels.com/photos/6367106/pexels-photo-6367106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                alt=""
                width={128}
                height={128}
                className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Teo Saris</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">856</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">452</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <PostFeed />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="testing" />
      </div>
    </div>
  );
};
export default ProfilePage;
