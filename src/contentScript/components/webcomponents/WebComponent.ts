import "@webcomponents/custom-elements";
import { Store } from "webext-redux";
import { ports } from "../../../constants/ports";

export abstract class WebComponent extends HTMLElement {
  protected shadow: ShadowRoot;

  protected proxyStore: Store;

  protected constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.appendDomToRoot();

    this.proxyStore = new Store({
      portName: ports.main
    });
  }

  protected appendDomToRoot(): void {
    const shadowStyle = this.createShadowStyle();
    if (shadowStyle) {
      this.shadow.appendChild(shadowStyle);
    }
    this.shadow.appendChild(this.createShadowStructure());
  }

  abstract createShadowStyle(): HTMLLinkElement | HTMLStyleElement | undefined;

  abstract createShadowStructure(): HTMLElement;
}
