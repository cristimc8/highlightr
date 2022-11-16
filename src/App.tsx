import React from 'react';
import './App.css';

import { useSelector } from "react-redux";
import { selectBookmarkedVideos } from "./redux/selectors/bookmarkVideoSelectors";
import { BookmarkedVideoLayout } from "./popup/components/BookmarkedVideoLayout/BookmarkedVideoLayout";
import { BookmarkedVideo } from "./models/BookmarkedVideo";
import { Header } from "./popup/components/header/Header";
import { InfiniteScrollContainer } from "./popup/components/InfiniteScrollContainer";

/**
 * Popup react page
 * @constructor
 */
function App() {

  return (
      <div className="App">
        <Header/>
        <InfiniteScrollContainer/>
      </div>
  );
}

export default App;
