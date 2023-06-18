import { BookmarkedVideo } from "../models/BookmarkedVideo";

export const getVideoCurrentTime = (): number => {
  const video = document.getElementsByClassName('video-stream')[0];
  // @ts-ignore
  return video.currentTime;
};

export const getVideoDuration = (): number => {
  const video = document.getElementsByClassName('video-stream')[0];
  // @ts-ignore
  return video.duration;
};

export const getVideoTitle = (): string => {
  return document.title.split(" - YouTube")[0];
};

export const getLikeDislikeDivHeight = (): number => {
  const likeDislikeDiv = document.getElementById('top-level-buttons-computed');
  // @ts-ignore
  return likeDislikeDiv.clientHeight;
};

export const documentToBookmarkedVideo = (): BookmarkedVideo => (
    new BookmarkedVideo(document.URL, getVideoTitle(), getVideoDuration(), [], getVideoCurrentTime())
);
