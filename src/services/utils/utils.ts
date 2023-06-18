export const promiseSleep = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const extractElementFromShadow = (shadowName: string, elementId: string): HTMLElement | null => {
    const shadow = document.getElementsByTagName(shadowName)?.[0]?.shadowRoot;
    if (!shadow) {
        return null;
    }
    const element = shadow.getElementById(elementId);
    if(!element) {
        return null;
    }
    return element;
}
