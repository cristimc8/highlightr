import React from "react";
import {BookmarkedVideo} from "../../../models/BookmarkedVideo";

export const BookmarkedVideoLayout = ({bookmarkedVideo}: {
    bookmarkedVideo: BookmarkedVideo | null
}) => {

    return (
        <div style={styles.bookmarkedVideo}>

        </div>
    )
}

const styles = {
    bookmarkedVideo: {
        width: "200px",
        height: "150px",
        borderRadius: "15px",
        backgroundColor: "#162b3b"
    }
}
