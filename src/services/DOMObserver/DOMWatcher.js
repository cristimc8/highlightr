const observeDOM = (function () {
    // @ts-ignore
    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;


    return function (obj, callback) {
        if (!obj || obj.nodeType !== 1) return;

        if (MutationObserver) {
            // define a new observer
            let mutationObserver = new MutationObserver(callback)

            // have the observer observe foo for changes in children
            mutationObserver.observe(obj, {childList: true, subtree: true})
            return mutationObserver
        }

        // browser support fallback
        else if (window.addEventListener) {
            obj.addEventListener('DOMNodeInserted', callback, false)
        }
    }
})()

/**
 * Function that checks for changes in the DOM
 */
export const watchForLikeButtonsSpawn = (callbackFn) => {
    // if already spawned don't watch
    if (readyToInject())
        callbackFn();
    observeDOM(document.body, function (m) {
        let addedNodes = [];

        m.forEach(record => record.addedNodes.length & addedNodes.push(...record.addedNodes))

        addedNodes.forEach(node => {
            if (node.nodeName === "YT-ICON" && node.classList.length === 2
                && node.classList.contains("ytd-toggle-button-renderer")) {
                // All grandchildren of the node.
                console.log("Like or dislike buttons spawned!");
                if (readyToInject()) {
                    callbackFn();
                }
            }
        })
    });
}

const buttonsAlreadySpawned = () => {
    return document.getElementsByClassName("ytd-toggle-button-renderer").length >= 2
}

export const readyToInject = () => {
    return document.getElementById("top-level-buttons-computed") && buttonsAlreadySpawned() &&
        document.getElementById("highlightr-button") === null
}
