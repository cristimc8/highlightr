/**
 * Action for adding a new bookmark based on a url
 * @param videoUrl
 */
export const addNewBookmark = (videoUrl: string) => ({
    type: 'BOOKMARK_VIDEO',
    payload: videoUrl
})
