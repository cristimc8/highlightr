import { BookmarkedVideo } from "../../models/BookmarkedVideo";
import { keys } from "./keys";

const PAGE_SIZE = 4;

/**
 * Updates the bookmarked values by adding this one.
 * @param bookmarked
 */
export const addBookmark = async (bookmarked: BookmarkedVideo): Promise<void> => {
  let alreadyBookmarked = await getValueForKey(keys.syncd.bookmarkedVideos) as BookmarkedVideo[];
  // we need to find if we already have this video id in our bookmarks and update the checkpoints
  if (alreadyBookmarked) {
    const foundIndex = alreadyBookmarked.findIndex((video) => video.videoId === bookmarked.videoId);
    if (foundIndex !== -1) {
      alreadyBookmarked[foundIndex].checkpoints = [
        ...alreadyBookmarked[foundIndex].checkpoints,
        ...bookmarked.checkpoints
      ];
      await setValueForKey(keys.syncd.bookmarkedVideos, alreadyBookmarked);
      return;
    }
  }
  await setValueForKey(keys.syncd.bookmarkedVideos, [...(alreadyBookmarked) || [], bookmarked]);
};

export const listBookmarks = async (
    page = 1,
): Promise<BookmarkedVideo[]> => {
  const bookmarks = (await getValueForKey(keys.syncd.bookmarkedVideos) as BookmarkedVideo[])
      .reverse();
  if (bookmarks) {
    return bookmarks.slice((page - 1) * PAGE_SIZE, (page) * PAGE_SIZE);
  }
  return [];
};

export const searchBookmarks = async (
    query: string,
    page = 1,
): Promise<BookmarkedVideo[]> => {
  const bookmarks = (await getValueForKey(keys.syncd.bookmarkedVideos) as BookmarkedVideo[])
      .reverse();
  if (bookmarks) {
    return bookmarks.filter((bookmark) => bookmark.title.toLowerCase().includes(query.toLowerCase()))
        .slice((page - 1) * PAGE_SIZE, (page) * PAGE_SIZE);
  }
  return [];
}

/**
 * Function that returns the value of a certain key stored in chrome synced
 * storage.
 * @param key
 * @returns {Promise<JSON | String>}
 */
function getValueForKey(key: string) {
  return new Promise((resolve, reject): any => {
    try {
      chrome.storage.local.get([key], function (result) {
        resolve(result[key]);
      });
    } catch (e) {
      reject(e);
    }
  });
}

export function clearLocalStorage() {
  return new Promise(resolve => {
    chrome.storage.local.clear(function () {
      let error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
        resolve(0);
      }
      resolve(1);
    });
  });
}

/**
 * Function to remove an entry for a specified key from chrome local
 * storage.
 * @param key
 * @returns {Promise<Boolean>} The deleted element
 * @throws Exception
 */
function removeKeyEntry(key: string) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.remove([key], () => {
        resolve(true);
      });
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Function that sets a value for a key provided in the chrome local storage.
 * @param key
 * @param value anything, object to json
 * @returns {Promise<Boolean>} State of the operation, true for success
 */
export function setValueForKey(key: string, value: any) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, function () {
        resolve(true);
      });
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Function that returns all objects currently being in the chrome local
 * storage.
 * @returns {Promise<unknown>}
 */
export function getAllStorageEntries() {
  return new Promise(resolve => {
    chrome.storage.local.get(function (result) {
      resolve(result);
    });
  });
}
