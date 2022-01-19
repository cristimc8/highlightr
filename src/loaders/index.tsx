import {IHighlightrClient} from "../types/IHighlightrClient";
import {Store} from "webext-redux";
import {ports} from "../constants/ports";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {BookmarkButton} from "../contentScript/components/BookmarkButton";
import React, {useState} from "react";
import {BurgerMenu} from "../contentScript/components/BurgerMenu";
import {ContentApp} from "../contentScript/components/ContentApp";

export const setupClient = async ({clientApp}: { clientApp: IHighlightrClient }) => {
    console.log(`Highlightr ${clientApp.version.name}`)

    setTimeout(() => {
        injectBookmarkButton()
    }, 3000);
}

// Create an anchor and inject the button wrapped by thes
// redux provider
const injectBookmarkButton = () => {
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
