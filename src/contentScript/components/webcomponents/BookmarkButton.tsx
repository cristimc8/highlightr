import "@webcomponents/custom-elements";
import React from "react";
import { WebComponent } from "./WebComponent";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BookmarkButton } from "../BookmarkButton";
import { extractElementFromShadow } from "../../../services/utils/utils";

export class BookmarkButtonComponent extends WebComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    render(
        <Provider store={this.proxyStore}>
          <BookmarkButton/>
        </Provider>
        , extractElementFromShadow('highlightr-bookmark-button', 'highlightr-button-container'));
  }

  createShadowStructure(): HTMLElement {
    const highlightrButton = document.createElement('div');
    highlightrButton.id = 'highlightr-button-container';
    highlightrButton.style.display = 'flex';
    highlightrButton.style.alignItems = "center";
    highlightrButton.style.paddingBottom = "2px";
    highlightrButton.style.paddingRight = "12px";

    return highlightrButton;
  }

  createShadowStyle(): HTMLLinkElement | HTMLStyleElement | undefined {
    return undefined;
  }
}
