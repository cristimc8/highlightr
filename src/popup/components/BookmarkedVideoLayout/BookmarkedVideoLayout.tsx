import React, {useEffect} from "react";
import {BookmarkedVideo} from "../../../models/BookmarkedVideo";

export const BookmarkedVideoLayout = ({bookmarkedVideo}: {
    bookmarkedVideo: BookmarkedVideo
}) => {

    return (
        <div style={styles.bookmarkedVideo} className={"gradient"}>
            <div style={styles.videoThumbnailContainer}>
                {/* @ts-ignore */}
                <img src={bookmarkedVideo.thumbnailUrl} style={styles.videoThumbnail} alt="Thumbnail"/>
            </div>
        </div>
    )
}

const styles = {
    bookmarkedVideo: {
        width: "200px",
        height: "210px",
        borderRadius: "15px",
        backgroundColor: "#ededed"
    },
    videoThumbnail: {
        objectFit: "cover",
        width: "100%"
    },
    videoThumbnailContainer: {
        height: "150px",
        width: "100%",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        overflow: "hidden"
    }
}
