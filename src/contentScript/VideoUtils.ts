import { BookmarkedVideo } from "../models/BookmarkedVideo";

export const getVideoCurrentTime = (): number => {
  const video = document.getElementsByClassName("video-stream")[0];
  // @ts-ignore
  return video.currentTime;
};

export const getVideoDuration = (): number => {
  const video = document.getElementsByClassName("video-stream")[0];
  // @ts-ignore
  return video.duration;
};

export const getVideoTitle = (): string => {
  const rawTitle = document.title.split(" - YouTube")[0];
  // Strips the unread-notification count YouTube prepends to the tab title,
  // e.g. "(1) Video Title" or "(9+) Video Title" -> "Video Title"
  return rawTitle.replace(/^\(\d+\+?\)\s*/, "");
};

export const getLikeDislikeDivHeight = (): number => {
  const likeDislikeDiv = document.getElementById("top-level-buttons-computed");
  // @ts-ignore
  return likeDislikeDiv.clientHeight;
};

export const documentToBookmarkedVideo = (): BookmarkedVideo =>
  new BookmarkedVideo(
    document.URL,
    getVideoTitle(),
    getVideoDuration(),
    [],
    getVideoCurrentTime(),
  );
