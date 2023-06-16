import React, { useState } from "react";
import '../../../App.css';

export const Header = () => {
  const [text, setText] = useState('');

    return (
        <div className={'App-header'}>
            <div id={'searchBar'}>
                <input
                    className={'searchInput'}
                    type={'text'}
                    placeholder={'Search'}
                    value={text}
                    onChange={(e) => setText(e.target.value)
                }/>
              <div id={'searchIcon'}>
                <img src={chrome.runtime.getURL("img/magnifying-glass.png")}
                     alt="search"
                     width={'17px'}
                     height={'17px'}
                     style={{
                       marginRight: '10px',
                       cursor: 'pointer'
                }}/>
              </div>
            </div>
        </div>
    )
}
