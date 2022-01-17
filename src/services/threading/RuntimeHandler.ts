import Threads from "./Threads";

/**
 * This class sets up ***one*** chrome runtime message listener
 * that redirects the background's request's result back to the caller
 * function, found in foreground.
 * ##Important##
 * If no active listener is defined, nothing will happen with the
 * request.
 */
export default class RuntimeHandler {
    static setup() {
        if(this.isInstanceRunning) return;
        this.isInstanceRunning = true
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if(Threads.activeListeners[request.action]) {
                    Threads.activeListeners[request.action](request.result)
                    delete Threads.activeListeners[request.action]
                }
            }
        );
    }

    static isInstanceRunning = false
}
