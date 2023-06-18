import React from "react";
import { BookmarkedVideo } from "../../../models/BookmarkedVideo";

export const BookmarkedVideoInfo = (props: { bookmarkedVideo: BookmarkedVideo }) => {
  return (
      <div className={'bookmarkedVideo__info'}>
      <span className={'bookmarkedVideo__info__title'}>
        {
          props.bookmarkedVideo.title.length > 35 ?
              props.bookmarkedVideo.title.substring(0, 34) + '...' :
              props.bookmarkedVideo.title
        }
      </span>
        <div className={'bookmarkedVideo__info__checkpoints'}>
          <div className={'bookmarkedVideo__info__checkpoints__line'}>
            {props.bookmarkedVideo.checkpoints.map((checkpoint, i) => {
              return (
                  <a href={`${checkpoint.url}`}
                     key={i}
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
  );
};
