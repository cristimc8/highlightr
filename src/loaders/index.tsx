import {IHighlightrClient} from "../types/IHighlightrClient";
import {Store} from "webext-redux";
import {ports} from "../constants/ports";
import {render} from "react-dom";
import {Provider} from "react-redux";
import React, {useState} from "react";
import {ContentApp} from "../contentScript/components/ContentApp";
import {readyToInject } from "../services/DOMObserver/DOMWatcher";

export const setupClient = async ({clientApp}: { clientApp: IHighlightrClient }) => {
    console.log(`Highlightr ${clientApp.version.name}`)

    setInterval(() => {
        injectWithChecking()
    }, 500)
}

const injectWithChecking = () => {
    if(readyToInject())
        injectBookmarkButton()
}

// Create an anchor and inject the button wrapped by thes
// redux provider
const injectBookmarkButton = () => {
    console.log("Creating bookmark button")
    const anchor = document.createElement('div');
    anchor.style.display = "flex"
    anchor.style.alignItems = "center"
    anchor.style.paddingBottom = "2px"
    anchor.style.paddingRight = "12px"
    anchor.id = 'highlightr-anchor';

    const topLevelButtons = document.getElementById("top-level-buttons-computed");
    if (topLevelButtons)
        topLevelButtons.insertBefore(anchor, topLevelButtons.firstChild);

    const proxyStore = new Store({
        portName: ports.main
    })

    render(
        <Provider store={proxyStore}>
            <ContentApp/>
        </Provider>
        , document.getElementById('highlightr-anchor'))
}
