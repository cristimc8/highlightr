import React from "react";
import "@webcomponents/custom-elements";
import { WebComponent } from "./WebComponent";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BurgerMenu } from "../BurgerMenu";
import { extractElementFromShadow } from "../../../services/utils/utils";

export class HighlightrBurgrComponent extends WebComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    render(
        <Provider store={this.proxyStore}>
          <BurgerMenu/>
        </Provider>
        , extractElementFromShadow('highlightr-burgr', 'highlightr-burgr'));
  }

  createShadowStructure(): HTMLElement {
    const highlightrBurgr = document.createElement('div');
    highlightrBurgr.id = 'highlightr-burgr';
    highlightrBurgr.style.display = "none";

    return highlightrBurgr;
  }

  createShadowStyle(): HTMLLinkElement | HTMLStyleElement | undefined {
    let myStyle = document.createElement('link');
    myStyle.rel = 'stylesheet';
    myStyle.href = chrome.runtime.getURL("webstyles/burger-menu.css");
    return myStyle;
  }
}
