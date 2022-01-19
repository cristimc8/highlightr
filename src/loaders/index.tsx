import {IHighlightrClient} from "../types/IHighlightrClient";
import {Store} from "webext-redux";
import {ports} from "../constants/ports";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {BookmarkButton} from "../contentScript/components/BookmarkButton";
import React, {useState} from "react";
import {BurgerMenu} from "../contentScript/components/BurgerMenu";
import {ContentApp} from "../contentScript/components/ContentApp";

export const setupClient = async ({clientApp} : {clientApp: IHighlightrClient}) => {
    console.log(`Highlightr ${clientApp.version.name}`)
    injectBookmarkButton()
}

// Create an anchor and inject the button wrapped by the
// redux provider
const injectBookmarkButton = () => {
    const anchor = document.createElement('div');
    anchor.id = 'highlightr-anchor';

    document.body.insertBefore(anchor, document.body.childNodes[0]);

    const proxyStore = new Store({
        portName: ports.main
    })

    render(
        <Provider store={proxyStore}>
            <ContentApp />
            </Provider>
        , document.getElementById('highlightr-anchor'))
}
