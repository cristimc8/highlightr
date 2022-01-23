import {IHighlightrClient} from "../types/IHighlightrClient";
import {Store} from "webext-redux";
import {ports} from "../constants/ports";
import {render} from "react-dom";
import {Provider} from "react-redux";
import React from "react";
import {readyToInject} from "../services/DOMObserver/DOMWatcher";
import {BurgerMenu} from "../contentScript/components/BurgerMenu";
import {BookmarkButton} from "../contentScript/components/BookmarkButton";

export const setupClient = async ({clientApp}: { clientApp: IHighlightrClient }) => {
    console.log(`Highlightr ${clientApp.version.name}`)

    setInterval(() => {
        injectWithChecking()
    }, 500)
}

const injectWithChecking = () => {
    if (readyToInject())
        injectBookmarkButton()
}

// Create an anchor and inject the button wrapped by these
// redux provider
const injectBookmarkButton = () => {
    const content = document.getElementById("content");
    let disableContentClickListener = false;
    const proxyStore = new Store({
        portName: ports.main
    })

    // creating elements
    const hightlighrBurgr = document.createElement('div');
    hightlighrBurgr.id = 'hightlighr-burgr'
    hightlighrBurgr.style.display = "none";

    const highlightrButton = document.createElement('div');
    highlightrButton.style.display = "flex"
    highlightrButton.style.alignItems = "center"
    highlightrButton.style.paddingBottom = "2px"
    highlightrButton.style.paddingRight = "12px"
    highlightrButton.id = 'highlightr-button';
    highlightrButton.onclick = function () {
        if (hightlighrBurgr.style.display === "none") {
            hightlighrBurgr.style.display = "block";
            // @ts-ignore
            content.style.opacity = "0.2";
        }
        disableContentClickListener = true;
    } // open burger menu

    // inserting elements in DOM
    const topLevelButtons = document.getElementById("top-level-buttons-computed");
    topLevelButtons?.insertBefore(highlightrButton, topLevelButtons.firstChild);

    document.body.insertBefore(hightlighrBurgr, document.body.firstChild);

    // rendering inside elements
    render(
        <Provider store={proxyStore}>
            <BookmarkButton/>
        </Provider>
        , document.getElementById('highlightr-button'))
    render(
        <Provider store={proxyStore}>
            <BurgerMenu/>
        </Provider>
        , document.getElementById("hightlighr-burgr"))

    const contentClicked = () => {
        // close burger menu
        if (hightlighrBurgr.style.display === "block" && !disableContentClickListener) {
            hightlighrBurgr.style.display = "none";
            // @ts-ignore
            content.style.opacity = "1";
        }
        disableContentClickListener = false;
    }
    content?.addEventListener("click", contentClicked);
}
