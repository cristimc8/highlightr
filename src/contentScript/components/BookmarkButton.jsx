import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addNewBookmark} from "../../redux/actions/bookmarkVideoActions";
import {BookmarkedVideo} from "../../models/BookmarkedVideo";

export const BookmarkButton = ({setBurgerVisible}) => {
    const dispatch = useDispatch();

    const getVideoCurrentTime = () => {
        const video = document.getElementsByClassName('video-stream')[0];
        return video.currentTime;
    }

    const getVideoTitle = () => {
        return document.title.split(" - YouTube")[0];
    }

    useEffect(() => {
        console.log("3 secunde");
    }, []);

    const bookmarkVideo = () => {
        dispatch(addNewBookmark(new BookmarkedVideo(document.URL, getVideoTitle(), getVideoCurrentTime())))
        setBurgerVisible(true)
    }

    return (
        <button onClick={bookmarkVideo}>
            sint urat si cu pl mare
        </button>
    )
}
