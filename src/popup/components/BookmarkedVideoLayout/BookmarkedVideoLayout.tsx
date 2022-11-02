import React from "react";
import { BookmarkedVideo } from "../../../models/BookmarkedVideo";

export const BookmarkedVideoLayout = ({ bookmarkedVideo }: {
  bookmarkedVideo: BookmarkedVideo
}) => {

  return (
      <div className={'bookmarkedVideo'}>
        <div
            className={'bookmarkedVideo__image__blur__background'}
            style={{ background: `url(${bookmarkedVideo.thumbnailUrl})` }}
        ></div>
        <div className={'bookmarkedVideo__image__container'}>
          <img
              src={bookmarkedVideo.thumbnailUrl}
              alt={bookmarkedVideo.title}
              className={'bookmarkedVideo__image'}
          />
        </div>
        <div className={'bookmarkedVideo__info'}>
          <span className={'bookmarkedVideo__info__title'}>
            {
              bookmarkedVideo.title.length > 35 ?
                  bookmarkedVideo.title.substring(0, 35) + '...' :
                  bookmarkedVideo.title
            }
          </span>
          <div className={'bookmarkedVideo__info__checkpoints'}>
            <div className={'bookmarkedVideo__info__checkpoints__line'}>
              {bookmarkedVideo.checkpoints.map((checkpoint, i) => {
                return (
                    <a href={
                      `${checkpoint.url}`
                    }
                       target={'_blank'}>
                      <div
                          key={i}
                          className={'bookmarkedVideo__info__checkpoints__line__checkpoint'}
                          style={{
                            left: `${(checkpoint.time / bookmarkedVideo.length) * 100}%`,
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
};
