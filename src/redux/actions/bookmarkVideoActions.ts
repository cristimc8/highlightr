import { BookmarkedVideo } from "../../models/BookmarkedVideo";

/**
 * Action for adding a new bookmark based on a url
 * @param bookmarkedVideoObj
 */
export const addNewBookmark = (bookmarkedVideoObj: BookmarkedVideo) => ({
  type: "BOOKMARK_VIDEO",
  payload: bookmarkedVideoObj,
});

export const replaceBookmarks = (bookmarkedVideos: BookmarkedVideo[]) => ({
  type: "REPLACE_BOOKMARKS",
  payload: bookmarkedVideos,
});

export const pushBookmarks = (bookmarkedVideos: BookmarkedVideo[]) => ({
  type: "PUSH_BOOKMARKS",
  payload: bookmarkedVideos,
});

/**
 * Action for deleting a previously saved bookmark, identified by its video id
 * @param videoId
 */
export const deleteBookmark = (videoId: string) => ({
  type: "DELETE_BOOKMARK",
  payload: videoId,
});

/**
 * Action for removing a single checkpoint from a bookmarked video.
 * @param videoId
 * @param checkpointTime
 */
export const deleteCheckpoint = (videoId: string, checkpointTime: number) => ({
  type: "DELETE_CHECKPOINT",
  payload: { videoId, checkpointTime },
});
