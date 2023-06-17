import { IHighlightrClient } from "../types/IHighlightrClient";
import React from "react";
import { readyToInject } from "../services/DOMObserver/DOMWatcher";
import { HighlightrOverlay } from "../contentScript/components/webcomponents/HighlightrOverlay";
import { BookmarkButtonComponent } from "../contentScript/components/webcomponents/BookmarkButton";
import { extractElementFromShadow } from "../services/utils/utils";

// creating elements

customElements.define('highlightr-bookmark-button', BookmarkButtonComponent, { extends: 'HTMLElement' });
// customElements.define('highlightr-burgr', HighlightrBurgrComponent, { extends: 'HTMLElement' });
// const hightlighrBurgrShadow = document.createElement('highlightr-burgr');
const highlightrButtonShadow = document.createElement('highlightr-bookmark-button');


export const setupClient = async ({ clientApp }: { clientApp: IHighlightrClient }) => {
  console.log(`Highlightr ${clientApp.version.name}`);
  const injectionInterval = setInterval(async () => {
    await runInjectionLogic(injectionInterval);
  }, 2000);
};

const runInjectionLogic = async (intervalHandle: NodeJS.Timeout) => {
  if (!window.location.pathname.startsWith("/watch")) {
    return;
  }
  const highlightrButton = extractElementFromShadow('highlightr-bookmark-button', 'highlightr-button-container');
  if (highlightrButton !== null/* && isElementVisible(highlightrButton)*/) {
    return;
  }

  const injectionSuccessful = await injectHighlightrWhenLikeButtonsAreLoaded();
};

/**
 * Injects the highlightr button when the like buttons are loaded
 * will return a boolean indicating if the injection was successful
 */
const injectHighlightrWhenLikeButtonsAreLoaded = async (): Promise<boolean> => {
  const content = document.getElementById("content");
  let disableContentClickListener = false;


  const topRow = window.document.getElementById('owner');
  if (!topRow/* || !isElementVisible(topRow)*/) {
    return false;
  }

  // =========================================================
  topRow.insertBefore(highlightrButtonShadow, topRow.lastChild);

  const highlightrButton = extractElementFromShadow('highlightr-bookmark-button', 'highlightr-button-container');
  if (!highlightrButton) {
    return false;
  }

  // document.body.insertBefore(hightlighrBurgrShadow, document.body.lastChild);

  // const highlightrBurgr = extractElementFromShadow('highlightr-burgr', 'highlightr-burgr');
  // if(!highlightrBurgr) {
  //   return false;
  // }
  highlightrButton.onclick = () => {
    // if (highlightrBurgr.style.display === "none") {
    //   highlightrBurgr.style.display = "block";
    //   if (content) {
    //     content.style.opacity = "0.2";
    //   }
    // }
    disableContentClickListener = true;
  };


  const contentClicked = () => {
    /*// close burger menu
    if (highlightrBurgr.style.display === "block" && !disableContentClickListener) {
      highlightrBurgr.style.display = "none";
      // @ts-ignore
      content.style.opacity = "1";
    }
    disableContentClickListener = false;*/
  };
  content?.addEventListener("click", contentClicked);
  // =========================================================

  return true;

};

const isElementVisible = (element: HTMLElement): boolean => (
    element.offsetParent !== null &&
    element.offsetWidth > 0 &&
    element.offsetHeight > 0 &&
    element.style.visibility !== 'hidden' &&
    element.style.display !== 'none'
);
