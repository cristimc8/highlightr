import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Store} from "webext-redux";
import {connect, Provider, useSelector} from "react-redux";
import {ports} from "./constants/ports";
import {Main} from "./popup/components/Main";
import {selectBookmarkedVideos} from "./redux/selectors/bookmarkVideoSelectors";

function App(props: any) {

    const videos = useSelector(selectBookmarkedVideos)

    console.log(videos);

    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App
