import { IHighlightrClient } from "../types/IHighlightrClient";
import React from "react";
import { readyToInject } from "../services/DOMObserver/DOMWatcher";
import { HighlightrBurgrComponent } from "../contentScript/components/webcomponents/HighlightrBurgr";
import { BookmarkButtonComponent } from "../contentScript/components/webcomponents/BookmarkButton";
import { extractElementFromShadow } from "../services/utils/utils";

let injected = false;

export const setupClient = async ({ clientApp }: { clientApp: IHighlightrClient }) => {
  console.log(`Highlightr ${clientApp.version.name}`);

  setTimeout(() => {
    injectWithChecking();
  }, 3500);
};

const injectWithChecking = () => {
  if (!injected) {
    injectBookmarkButton();
  }
};

// Create an anchor and inject the button wrapped by these
// redux provider
const injectBookmarkButton = () => {
  injected = true;
  const content = document.getElementById("content");
  let disableContentClickListener = false;

  // creating elements
  customElements.define('highlightr-bookmark-button', BookmarkButtonComponent, { extends: 'HTMLElement' });
  customElements.define('highlightr-burgr', HighlightrBurgrComponent, { extends: 'HTMLElement' });

  const hightlighrBurgrShadow = document.createElement('highlightr-burgr');
  const highlightrButtonShadow = document.createElement('highlightr-bookmark-button');

  // inserting elements in DOM
  document.body.insertBefore(hightlighrBurgrShadow, document.body.firstChild);

  const topLevelButtons = document.getElementById("top-level-buttons-computed");
  console.log(`ceva: ${topLevelButtons}`);
  topLevelButtons?.insertBefore(highlightrButtonShadow, topLevelButtons.firstChild);

  const highlightrButton = extractElementFromShadow('highlightr-bookmark-button', 'highlightr-button-container');
  const highlightrBurgr = extractElementFromShadow('highlightr-burgr', 'highlightr-burgr');
  highlightrButton.onclick = () => {
    if (highlightrBurgr.style.display === "none") {
      highlightrBurgr.style.display = "block";
      if (content) {
        content.style.opacity = "0.2";
      }
    }
    disableContentClickListener = true;
  };

  console.log(highlightrButtonShadow)
  console.log(hightlighrBurgrShadow)

  const contentClicked = () => {
    // close burger menu
    if (highlightrBurgr.style.display === "block" && !disableContentClickListener) {
      highlightrBurgr.style.display = "none";
      // @ts-ignore
      content.style.opacity = "1";
    }
    disableContentClickListener = false;
  };
  content?.addEventListener("click", contentClicked);
};
