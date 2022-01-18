/**
 * Selector
 * Retreives the bookmarked videos
 * @param state
 */
export const selectBookmarkedVideos = (state: any) =>
    state.bookmarkVideoReducer?.bookmarkedVideos
