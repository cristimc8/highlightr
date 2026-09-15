import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { BookmarkedVideo } from "../../../models/BookmarkedVideo";
import { BookmarkedVideoInfo } from "./BookmarkedVideoInfo";
import { deleteBookmark } from "../../../redux/actions/bookmarkVideoActions";

export const BookmarkedVideoLayout = React.forwardRef(
  (props: { bookmarkedVideo: BookmarkedVideo }, ref?: any) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
      if (window.confirm("Delete this highlight?")) {
        dispatch(deleteBookmark(props.bookmarkedVideo.videoId));
      }
    };

    return (
      <div className={"bookmarkedVideo"} ref={ref}>
        <button
          type={"button"}
          className={"bookmarkedVideo__delete"}
          onClick={handleDelete}
          aria-label={"Delete bookmark"}
        >
          <FaTrashAlt />
        </button>
        <div
          className={"bookmarkedVideo__image__blur__background"}
          style={{ background: `url(${props.bookmarkedVideo.thumbnailUrl})` }}
        ></div>
        <div className={"bookmarkedVideo__image__container"}>
          <img
            src={props.bookmarkedVideo.thumbnailUrl}
            alt={props.bookmarkedVideo.title}
            className={"bookmarkedVideo__image"}
          />
        </div>
        <BookmarkedVideoInfo bookmarkedVideo={props.bookmarkedVideo} />
      </div>
    );
  },
);
