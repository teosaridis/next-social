import { useTranslations } from "next-intl";

const Homepage = () => {
 const t = useTranslations("HomePage");
  return (
    <div className="">
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Homepage;
