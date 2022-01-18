const initialState = {
    bookmarkedVideos: []
}

export const bookmarkVideoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case `BOOKMARK_VIDEO`:
            return {...state, bookmarkedVideos: [...state.bookmarkedVideos, action.payload]}
        default: return state
    }
}
