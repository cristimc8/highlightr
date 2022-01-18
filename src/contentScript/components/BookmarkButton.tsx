import React from "react";
import {useDispatch} from "react-redux";
import {addNewBookmark} from "../../redux/actions/bookmarkVideoActions";

export const BookmarkButton = () => {
    const dispatch = useDispatch();

    const bookmarkVideo = () => {
        dispatch(addNewBookmark(document.URL))
    }

    return (
        <div>
            <button onClick={bookmarkVideo} style={{position: 'absolute', background: 'red', top: "150px", zIndex: 9999999}}>Bookmark</button>
        </div>
    )
}
