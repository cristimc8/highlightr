import React from "react";
import '../../../App.css';

export const Header = () => {

    return (
        <div className={"App-header"}>
            <img src={chrome.runtime.getURL("img/48/highlightrLogo.cleaned.png")}
                 style={{height: "20px", width: "20px", marginRight: "5px"}}
                 alt=""/>
            <span color={"black"} className={"lato"}
               style={{fontSize: 20, fontWeight: 800, color: "#3e4652",
            fontStretch: "ultra-expanded"}}>
                Highlightr
            </span>
        </div>
    )
}
