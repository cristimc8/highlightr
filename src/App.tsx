import React from 'react';
import './App.css';
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
