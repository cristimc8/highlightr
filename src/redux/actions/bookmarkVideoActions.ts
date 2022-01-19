import {BookmarkedVideo} from "../../models/BookmarkedVideo";
import {getSyncdBookmarks} from "../../services/persistence/chromeStorage";

/**
 * Action for adding a new bookmark based on a url
 * @param bookmarkedVideoObj
 */
export const addNewBookmark = (bookmarkedVideoObj: BookmarkedVideo) => ({
    type: 'BOOKMARK_VIDEO',
    payload: bookmarkedVideoObj
})

export const preloadBookmarks = (preloadedBookmarkedVideos: BookmarkedVideo[]) => ({
    type: 'PRELOAD_BOOKMARKS',
    payload: preloadedBookmarkedVideos
})
