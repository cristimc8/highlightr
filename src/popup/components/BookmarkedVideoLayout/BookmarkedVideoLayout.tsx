import React from "react";
import { BookmarkedVideo } from "../../../models/BookmarkedVideo";

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
        <div className={'bookmarkedVideo__info'}>
          <span className={'bookmarkedVideo__info__title'}>
            {
              props.bookmarkedVideo.title.length > 35 ?
                  props.bookmarkedVideo.title.substring(0, 35) + '...' :
                  props.bookmarkedVideo.title
            }
          </span>
          <div className={'bookmarkedVideo__info__checkpoints'}>
            <div className={'bookmarkedVideo__info__checkpoints__line'}>
              {props.bookmarkedVideo.checkpoints.map((checkpoint, i) => {
                return (
                    <a href={
                      `${checkpoint.url}`
                    }
                       target={'_blank'}>
                      <div
                          key={i}
                          className={'bookmarkedVideo__info__checkpoints__line__checkpoint'}
                          style={{
                            left: `${(checkpoint.time / props.bookmarkedVideo.length) * 100}%`,
                            backgroundColor: checkpoint.checkpointColor
                          }}
                      />
                    </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
});
