import {getReturningGenericPath, queries} from "../../utils/globals/queries";

interface IDictionary<T> {
    [id: string]: T;
}

/**
 * Class used for communication between background and foreground
 * scripts.
 * ## Usage ##
 * Send a query with a callback to the background scripts, if there
 * is a listener defined there, you will receive its answer
 */
export default class Threads {
    /**
     * Holds callback functions, where the key is the
     * ID for the foreground call and the value is the
     * callback function registered
     * @type {Map<String, Function>}
     */
    static activeListeners: IDictionary<Function> = {}

    /**
     * Sends a request to the background thread
     * and registers an event listener for the callback
     * ##Important##
     * Callbacks are deleted from the active listeners pool
     * once executed
     * @param query {String}
     * @param args {[any]}
     * @param callbackFn {Function}
     */
    static request({query, args, callbackFn} : {query: string, args: any[], callbackFn: Function}) {
        sendScanQuery({query, args})
        registerListener({query: getReturningQuery(query), callbackFn})
    }
}

/**
 * Get the query that should return back to foreground
 * based on the query we received to deliver to background
 * @param query
 * @return {String}
 */
function getReturningQuery(query: string) {
    return queries.toForeground[Object.keys(queries.toBackground).find((key) => queries.toBackground[key] === query)]
}

/**
 * Function that sends a query to the background scripts to
 * begin scanning for something.
 * @param queryLocation the query you want to execute
 * @param args arguments you want to pass to the scan function.
 */
function sendScanQuery({query, args} : {query: string, args: any[]}) {
    chrome.runtime.sendMessage({
        action: query,
        data: args
    });
}

/**
 * Function that saves the callbackFunction to execute for when
 * the response from the background comes
 * @param query
 * @param callbackFn
 */
function registerListener({query, callbackFn} : {query: string, callbackFn: Function}) {
    Threads.activeListeners[query] = callbackFn;
}
