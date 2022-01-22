import React, {useEffect} from "react";
import {BookmarkedVideo} from "../../../models/BookmarkedVideo";

export const BookmarkedVideoLayout = ({bookmarkedVideo}: {
    bookmarkedVideo: BookmarkedVideo
}) => {

    return (
        <a href={bookmarkedVideo.videoUrlAtSavedTime} target={"_blank"} className={"thumbnailAnchor"}>
            <div className={"bookmarkedVideo"}>
                <img src={bookmarkedVideo.thumbnailUrl} className={"videoThumbnail"} alt="Thumbnail"/>
                <div className={"titleContainer"}>
                    <span style={{color: "black", fontWeight: 600}} className={"lato"}>{bookmarkedVideo.title}</span>
                </div>
            </div>
        </a>
    )
}
