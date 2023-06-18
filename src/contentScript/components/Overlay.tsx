import { documentToBookmarkedVideo } from "../VideoUtils";
import { BookmarkedVideoInfo } from "../../popup/components/BookmarkedVideoLayout/BookmarkedVideoInfo";
import { useEffect, useState } from "react";

export const Overlay = () => {
  // const videos = useSelector(selectBookmarkedVideos);
  const [bookmarkedVideo, setBookmarkedVideo] = useState(documentToBookmarkedVideo());
  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.data.type === "OVERLAY_DISPLAY_CHANGE") {
        setBookmarkedVideo(documentToBookmarkedVideo());
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
      <div className={"overlay-container"}>
        <div className={"overlay"}>
          <BookmarkedVideoInfo bookmarkedVideo={bookmarkedVideo} />
          <button>
            Save highlight
          </button>
        </div>

      </div>
  );
};
