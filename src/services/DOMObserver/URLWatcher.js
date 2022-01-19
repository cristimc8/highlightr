import {readyToInject} from "./DOMWatcher";

export const watchForURLChange = (callbackFn) => {
    window.addEventListener("yt-navigate-finish", () => {
        console.log("URL changed! " + document.location.href)
        try {
            document.getElementById("highlightr-anchor").remove()
        }
        catch (e) {}
        if(readyToInject()) {
            callbackFn()
        }
    })
}

