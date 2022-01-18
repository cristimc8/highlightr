import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectBookmarkedVideos} from "../../redux/selectors/bookmarkVideoSelectors";
import {addNewBookmark} from "../../redux/actions/bookmarkVideoActions";

export const Main = () => {

    return (
        <>
            <p>Hello? :)</p>
        </>
    )
}
