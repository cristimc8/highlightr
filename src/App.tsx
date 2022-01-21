import React from 'react';
import './App.css';

import {useSelector} from "react-redux";
import {Main} from "./popup/components/Main";
import {selectBookmarkedVideos} from "./redux/selectors/bookmarkVideoSelectors";
import {BookmarkedVideoLayout} from "./popup/components/BookmarkedVideoLayout/BookmarkedVideoLayout";

/**
 * Popup react page
 * @constructor
 */
function App() {

    const videos = useSelector(selectBookmarkedVideos)

    console.log(videos);

    return (
        <div className="App">
            <BookmarkedVideoLayout bookmarkedVideo={null} />
            <BookmarkedVideoLayout bookmarkedVideo={null} />
            <BookmarkedVideoLayout bookmarkedVideo={null} />
            <BookmarkedVideoLayout bookmarkedVideo={null} />
        </div>
    );
}

export default App
