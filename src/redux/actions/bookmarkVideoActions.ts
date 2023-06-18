import { BookmarkedVideo } from "../../models/BookmarkedVideo";

/**
 * Action for adding a new bookmark based on a url
 * @param bookmarkedVideoObj
 */
export const addNewBookmark = (bookmarkedVideoObj: BookmarkedVideo) => ({
  type: 'BOOKMARK_VIDEO',
  payload: bookmarkedVideoObj
});

export const replaceBookmarks = (bookmarkedVideos: BookmarkedVideo[]) => ({
  type: 'REPLACE_BOOKMARKS',
  payload: bookmarkedVideos
});

export const pushBookmarks = (bookmarkedVideos: BookmarkedVideo[]) => ({
  type: 'PUSH_BOOKMARKS',
  payload: bookmarkedVideos
});
