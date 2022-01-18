import React from 'react';
import './App.css';

import {useSelector} from "react-redux";
import {Main} from "./popup/components/Main";
import {selectBookmarkedVideos} from "./redux/selectors/bookmarkVideoSelectors";

function App() {

    const videos = useSelector(selectBookmarkedVideos)

    console.log(videos);

    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App
