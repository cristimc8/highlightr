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
          <Header style={{ marginLeft: "20px" }}/>
        </div>
        <div className={"burger-content"}>
          <span style={{ fontSize: '20px' }}>There are <b>{videos?.length}</b> timestamps...</span>
          {videos?.map((video, i) => <TimestampBox key={i} video={video}/>)}
        </div>
      </div>
  );
};
