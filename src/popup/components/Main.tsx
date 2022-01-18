import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectBookmarkedVideos} from "../../redux/selectors/bookmarkVideoSelectors";
import {addNewBookmark} from "../../redux/actions/bookmarkVideoActions";

export const Main = () => {
    const dispatch = useDispatch();

    const bookmarkVideo = () => {
        dispatch(addNewBookmark(document.URL))
    }

    return (
        <>
            <button onClick={bookmarkVideo}>click me</button>
        </>
    )
}
