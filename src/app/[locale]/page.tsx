import AddPost from "@/components/socialapp/AddPost";
import LeftMenu from "@/components/socialapp/leftMenu/LeftMenu";
import PostFeed from "@/components/socialapp/PostFeed";
import RightMenu from "@/components/socialapp/rightMenu/RightMenu";
import Stories from "@/components/socialapp/Stories";
import { useTranslations } from "next-intl";

const Homepage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex gap-6 pt-6">
      {/* <h1>{t("title")}</h1> */}
      {/* LEFT  */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      {/* CENTER  */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <PostFeed />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="" />
      </div>
    </div>
  );
};

export default Homepage;
