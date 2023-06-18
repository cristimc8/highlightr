import React from 'react';
import './App.css';
import { Header } from "./popup/components/header/Header";
import { InfiniteScrollContainer } from "./popup/components/InfiniteScrollContainer";

/**
 * Popup react page
 * @constructor
 */
function App() {

  const [text, setText] = React.useState('');

  return (
      <div className="App">
        <Header text={text} setText={setText}/>
        <InfiniteScrollContainer text={text}/>
      </div>
  );
}

export default App;
