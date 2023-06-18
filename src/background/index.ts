// If your extension doesn't need a background script, just leave this file empty

import { wrapStore } from "webext-redux";
import { store } from "../redux/store";
import { ports } from "../constants/ports";
import { replaceBookmarks } from "../redux/actions/bookmarkVideoActions";
import { listBookmarks } from "../services/persistence/chromeStorage";
import { BookmarkedVideo } from "../models/BookmarkedVideo";

runBackgroundScripts();

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export function runBackgroundScripts() {
  wrapStore(store, {
    portName: ports.main
  });

  listBookmarks().then((bookmarkedVideos: BookmarkedVideo[]) => {
    if (bookmarkedVideos === undefined) return;
    store.dispatch(replaceBookmarks(bookmarkedVideos));
  });
}
