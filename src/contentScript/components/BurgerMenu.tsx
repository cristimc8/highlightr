import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectBookmarkedVideos } from "../../redux/selectors/bookmarkVideoSelectors";
import { Header } from "../../popup/components/header/Header";
import TimestampBox from "./TimestampBox";

export const BurgerMenu = () => {
  const videos = useSelector(selectBookmarkedVideos);

  useEffect(() => {
    console.log("videos: ", videos);
  }, [videos]);

  return (
      <div className={"burger-menu"}>
        <div className={"header-container"}>
          <Header/>
        </div>

      </div>
  );
};
