// If your extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages
import {HighlightrClient} from "../highlightrClient/HighlightrClient";
import {setupClient} from "../loaders";
import React from "react";

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export const runHighlightr = async () => {
    /**
     * Setup the local client
     */
    const highlightrApp = HighlightrClient();
    await setupClient({clientApp: highlightrApp})
}

runHighlightr()
