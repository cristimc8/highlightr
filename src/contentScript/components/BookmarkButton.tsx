import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addNewBookmark} from "../../redux/actions/bookmarkVideoActions";
import {BookmarkedVideo} from "../../models/BookmarkedVideo";

export const BookmarkButton = ({setBurgerVisible}: { setBurgerVisible: Function }) => {
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
        setBurgerVisible(true)
    }

    return (
        <img id={"highlightr-drawer-trigger"} src={chrome.runtime.getURL("img/highlightrLetter.png")}
             alt="" onClick={bookmarkVideo} width={16} height={20} style={{cursor: 'pointer'}}/>
    )
}
