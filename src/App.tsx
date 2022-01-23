import React, {useEffect, useState} from 'react';
import './App.css';

import {useSelector} from "react-redux";
import {Main} from "./popup/components/Main";
import {selectBookmarkedVideos} from "./redux/selectors/bookmarkVideoSelectors";
import {BookmarkedVideoLayout} from "./popup/components/BookmarkedVideoLayout/BookmarkedVideoLayout";
import {BookmarkedVideo} from "./models/BookmarkedVideo";
import {Header} from "./popup/components/header/Header";

/**
 * Popup react page
 * @constructor
 */
function App() {

    const videos = useSelector(selectBookmarkedVideos)

    console.log(videos);

    return (
        <div className="App">
            <Header />
            <hr/>
            {videos && videos.map((bv: BookmarkedVideo, i) => {
                return (
                    <BookmarkedVideoLayout key={i} bookmarkedVideo={bv}/>
                )
            })}
        </div>
    );
}

export default App
