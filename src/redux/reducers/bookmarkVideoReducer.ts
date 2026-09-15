import {
  addBookmark,
  deleteBookmark,
  deleteCheckpoint,
} from "../../services/persistence/chromeStorage";
import { BookmarkedVideo } from "../../models/BookmarkedVideo";

const initialState = {
  bookmarkedVideos: [],
};

export const bookmarkVideoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case `BOOKMARK_VIDEO`:
      addBookmark(action.payload);
      return {
        ...state,
        bookmarkedVideos: [...state.bookmarkedVideos, action.payload],
      };
    case `REPLACE_BOOKMARKS`:
      return { ...state, bookmarkedVideos: action.payload };
    case `PUSH_BOOKMARKS`:
      return {
        ...state,
        bookmarkedVideos: [...state.bookmarkedVideos, ...action.payload],
      };
    case `DELETE_BOOKMARK`:
      deleteBookmark(action.payload);
      return {
        ...state,
        bookmarkedVideos: state.bookmarkedVideos.filter(
          (video: BookmarkedVideo) => video.videoId !== action.payload,
        ),
      };
    case `DELETE_CHECKPOINT`: {
      const { videoId, checkpointTime } = action.payload;
      deleteCheckpoint(videoId, checkpointTime);
      const updatedVideos = state.bookmarkedVideos
        .map((video: BookmarkedVideo) => {
          if (video.videoId === videoId) {
            video.checkpoints = video.checkpoints.filter(
              (checkpoint) => checkpoint.time !== checkpointTime,
            );
          }
          return video;
        })
        .filter((video: BookmarkedVideo) => video.checkpoints.length > 0);
      return { ...state, bookmarkedVideos: updatedVideos };
    }
    default:
      return state;
  }
};
