import React from "react";
import "@webcomponents/custom-elements";
import { WebComponent } from "./WebComponent";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BurgerMenu } from "../BurgerMenu";
import { extractElementFromShadow } from "../../../services/utils/utils";

export class HighlightrOverlay extends WebComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    render(
        <Provider store={this.proxyStore}>
          <BurgerMenu/>
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
    myStyle.href = chrome.runtime.getURL("webstyles/burger-menu.css");
    return myStyle;
  }
}
