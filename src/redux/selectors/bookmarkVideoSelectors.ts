/**
 * Selector
 * Retreives the bookmarked videos
 * @param state
 */
import { BookmarkedVideo } from "../../models/BookmarkedVideo";

export const selectBookmarkedVideos = (state: any): BookmarkedVideo[] =>
    state.bookmarkVideoReducer?.bookmarkedVideos;
