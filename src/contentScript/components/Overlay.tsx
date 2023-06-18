import { documentToBookmarkedVideo } from "../VideoUtils";
import { BookmarkedVideoInfo } from "../../popup/components/BookmarkedVideoLayout/BookmarkedVideoInfo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewBookmark } from "../../redux/actions/bookmarkVideoActions";

export const Overlay = () => {
  const dispatch = useDispatch();

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

  const bookmarkVideo = () => {
    dispatch(
        addNewBookmark(bookmarkedVideo)
    );
  };

  const closeOverlay = () => {
    window.postMessage({ type: "CLOSE_OVERLAY" }, "*");
  };

  return (
      <div className={"overlay-container"}>
        <div className={"overlay"}>
          <BookmarkedVideoInfo bookmarkedVideo={bookmarkedVideo}/>
          <button
              className="close-btn"
              onClick={closeOverlay}
          >
          </button>
          <button
              className={'button-white'}
              onClick={() => {
                bookmarkVideo();
                closeOverlay();
              }}
          >
            Save highlight
          </button>
        </div>

      </div>
  );
};
