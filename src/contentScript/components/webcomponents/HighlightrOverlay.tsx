import React from "react";
import "@webcomponents/custom-elements";
import { WebComponent } from "./WebComponent";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Overlay } from "../Overlay";
import { extractElementFromShadow } from "../../../services/utils/utils";

export class HighlightrOverlay extends WebComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    render(
        <Provider store={this.proxyStore}>
          <Overlay/>
        </Provider>
        , extractElementFromShadow('highlightr-overlay', 'highlightr-overlay'));
  }

  createShadowStructure(): HTMLElement {
    const highlightrOverlay = document.createElement('div');
    highlightrOverlay.id = 'highlightr-overlay';
    highlightrOverlay.style.display = "none";

    return highlightrOverlay;
  }

  createShadowStyle(): HTMLLinkElement | HTMLStyleElement | undefined {
    let myStyle = document.createElement('link');
    myStyle.rel = 'stylesheet';
    myStyle.href = chrome.runtime.getURL("webstyles/overlay.css");
    return myStyle;
  }
}
