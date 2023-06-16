import React from "react";
import { useDispatch } from "react-redux";
import { addNewBookmark } from "../../redux/actions/bookmarkVideoActions";
import { BookmarkedVideo } from "../../models/BookmarkedVideo";

export const BookmarkButton = () => {
  const dispatch = useDispatch();

  const getVideoCurrentTime = (): number => {
    const video = document.getElementsByClassName('video-stream')[0];
    // @ts-ignore
    return video.currentTime;
  };

  const getVideoDuration = (): number => {
    const video = document.getElementsByClassName('video-stream')[0];
    // @ts-ignore
    return video.duration;
  };

  const getVideoTitle = (): string => {
    return document.title.split(" - YouTube")[0];
  };

  const getLikeDislikeDivHeight = (): number => {
    const likeDislikeDiv = document.getElementById('top-level-buttons-computed');
    // @ts-ignore
    return likeDislikeDiv.clientHeight;
  };

  const bookmarkVideo = () => {
    dispatch(
        addNewBookmark(
            new BookmarkedVideo(document.URL, getVideoTitle(), getVideoDuration(), [], getVideoCurrentTime())
        )
    );
  };

  return (
      <div style={{ height: `${getLikeDislikeDivHeight()}px`, alignItems: 'center', display: 'flex' }}>
        <img
            id={"highlightr-drawer-trigger"}
            src={chrome.runtime.getURL("img/disc.png")}
            alt=""
            onClick={bookmarkVideo}
            style={{
              cursor: 'pointer',
              height: '3rem',
              width: '3rem',
            }}/>
      </div>

  );
};
