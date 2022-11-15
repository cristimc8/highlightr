export const promiseSleep = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const extractElementFromShadow = (shadowName: string, elementId: string): HTMLElement => {
    const shadow = document.getElementsByTagName(shadowName)?.[0]?.shadowRoot;
    if (!shadow) {
        throw new Error(`Could not find shadow root ${shadowName}`);
    }
    const element = shadow.getElementById(elementId);
    if(!element) {
        throw new Error(`Could not find element ${elementId} in shadow root ${shadow}`);
    }
    return element;
}
