import { syncBookmark } from "../../services/persistence/chromeStorage";

const initialState = {
  bookmarkedVideos: []
};

export const bookmarkVideoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case `BOOKMARK_VIDEO`:
      syncBookmark(action.payload);
      return { ...state, bookmarkedVideos: [...state.bookmarkedVideos, action.payload] };
    case `PRELOAD_BOOKMARKS`:
      return { ...state, bookmarkedVideos: action.payload };
    default:
      return state;
  }
};
