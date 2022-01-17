// If your extension doesn't need a background script, just leave this file empty

import {wrapStore} from "webext-redux";

runBackgroundScripts()

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export function runBackgroundScripts() {
  wrapStore()
}
