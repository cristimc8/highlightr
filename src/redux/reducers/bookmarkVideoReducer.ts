import { addBookmark } from "../../services/persistence/chromeStorage";

const initialState = {
  bookmarkedVideos: []
};

export const bookmarkVideoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case `BOOKMARK_VIDEO`:
      addBookmark(action.payload);
      return { ...state, bookmarkedVideos: [...state.bookmarkedVideos, action.payload] };
    case `REPLACE_BOOKMARKS`:
      return { ...state, bookmarkedVideos: action.payload };
    case `PUSH_BOOKMARKS`:
      return { ...state, bookmarkedVideos: [...state.bookmarkedVideos, ...action.payload] };
    default:
      return state;
  }
};
