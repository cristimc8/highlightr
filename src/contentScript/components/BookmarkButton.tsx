import React from "react";
import {useDispatch} from "react-redux";
import {addNewBookmark} from "../../redux/actions/bookmarkVideoActions";
import {BookmarkedVideo} from "../../models/BookmarkedVideo";

export const BookmarkButton = () => {
    const dispatch = useDispatch();

    const getVideoCurrentTime = (): number => {
        const video = document.getElementsByClassName('video-stream')[0];
        // @ts-ignore
        return video.currentTime;
    }

    const getVideoTitle = (): string => {
        return document.title.split(" - YouTube")[0];
    }

    const bookmarkVideo = () => {
        dispatch(addNewBookmark(new BookmarkedVideo(document.URL, getVideoTitle(), getVideoCurrentTime())))
    }

    return (
        <div>
            <button onClick={bookmarkVideo}
                    style={{position: 'absolute', background: 'red', top: "150px", zIndex: 9999999}}>Bookmark
            </button>
        </div>
    )
}
