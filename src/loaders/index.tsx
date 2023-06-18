import { IHighlightrClient } from "../types/IHighlightrClient";
import React from "react";
import { readyToInject } from "../services/DOMObserver/DOMWatcher";
import { HighlightrOverlay } from "../contentScript/components/webcomponents/HighlightrOverlay";
import { BookmarkButtonComponent } from "../contentScript/components/webcomponents/BookmarkButton";
import { extractElementFromShadow } from "../services/utils/utils";

// creating elements

customElements.define('highlightr-bookmark-button', BookmarkButtonComponent, { extends: 'HTMLElement' });
customElements.define('highlightr-overlay', HighlightrOverlay, { extends: 'HTMLElement' });
const highlightrButtonShadow = document.createElement('highlightr-bookmark-button');
const highlightrOverlayShadow = document.createElement('highlightr-overlay');


export const setupClient = async ({ clientApp }: { clientApp: IHighlightrClient }) => {
  console.log(`Highlightr ${clientApp.version.name}`);
  const injectionInterval = setInterval(async () => {
    await runInjectionLogic(injectionInterval);
  }, 2000);

  window.addEventListener("message", handleMessage);
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
  const ytdApp = document.querySelectorAll('ytd-app')[0] as HTMLElement;
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

  document.body.insertBefore(highlightrOverlayShadow, document.body.lastChild);

  const highlightrOverlay = extractElementFromShadow('highlightr-overlay', 'highlightr-overlay');
  if (!highlightrOverlay) {
    return false;
  }
  highlightrButton.onclick = () => {
    if (highlightrOverlay.style.display === "none") {
      highlightrOverlay.style.display = "block";
      if (ytdApp) {
        ytdApp.style.opacity = '0.6';
        ytdApp.style.filter = 'blur(5px)'
      }
    }
    // make sure the React component is aware of the displayed overlay
    window.postMessage({ type: "OVERLAY_DISPLAY_CHANGE" }, "*");
    disableContentClickListener = true;
  };


  const contentClicked = () => {
    if (highlightrOverlay.style.display === "block" && !disableContentClickListener) {
      highlightrOverlay.style.display = "none";
      if (ytdApp) {
        ytdApp.style.opacity = '1';
        ytdApp.style.filter = 'blur(0px)'
      }

    }
    disableContentClickListener = false;
  };
  ytdApp?.addEventListener("click", contentClicked);
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

const handleMessage = (event: any) => {
  if (event.data.type === "CLOSE_OVERLAY") {
    closeOverlay();
  }
}

const closeOverlay = () => {
  const ytdApp = document.querySelectorAll('ytd-app')[0] as HTMLElement;

  const highlightrOverlay = extractElementFromShadow('highlightr-overlay', 'highlightr-overlay');
  if (highlightrOverlay) {
    highlightrOverlay.style.display = "none";
  }
  if (ytdApp) {
    ytdApp.style.opacity = '1';
    ytdApp.style.filter = 'blur(0px)'
  }
}
