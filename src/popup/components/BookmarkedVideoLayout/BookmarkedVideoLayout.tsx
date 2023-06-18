import React from "react";
import { BookmarkedVideo } from "../../../models/BookmarkedVideo";
import { BookmarkedVideoInfo } from "./BookmarkedVideoInfo";

export const BookmarkedVideoLayout = React.forwardRef((props: { bookmarkedVideo: BookmarkedVideo }, ref?: any) => {
  return (
      <div className={'bookmarkedVideo'} ref={ref}>
        <div
            className={'bookmarkedVideo__image__blur__background'}
            style={{ background: `url(${props.bookmarkedVideo.thumbnailUrl})` }}
        ></div>
        <div className={'bookmarkedVideo__image__container'}>
          <img
              src={props.bookmarkedVideo.thumbnailUrl}
              alt={props.bookmarkedVideo.title}
              className={'bookmarkedVideo__image'}
          />
        </div>
        <BookmarkedVideoInfo bookmarkedVideo={props.bookmarkedVideo} />
      </div>
  );
});
