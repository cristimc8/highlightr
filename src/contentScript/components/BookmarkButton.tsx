import React from "react";
import { useDispatch } from "react-redux";
import { addNewBookmark } from "../../redux/actions/bookmarkVideoActions";
import { documentToBookmarkedVideo, getLikeDislikeDivHeight } from "../VideoUtils";

export const BookmarkButton = () => {
  const dispatch = useDispatch();

  const bookmarkVideo = () => {
    dispatch(
        addNewBookmark(documentToBookmarkedVideo())
    );
  };

  return (
      <div style={{ height: `${getLikeDislikeDivHeight()}px`, alignItems: 'center', display: 'flex' }}>
        <img
            id={"highlightr-drawer-trigger"}
            src={chrome.runtime.getURL("img/disc.png")}
            alt=""
            /*onClick={bookmarkVideo}*/
            style={{
              cursor: 'pointer',
              height: '3rem',
              width: '3rem',
            }}/>
      </div>

  );
};
