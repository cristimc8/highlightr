import { BookmarkedVideo } from "../../models/BookmarkedVideo";
import { useCallback, useEffect, useRef, useState } from "react";
import { BookmarkedVideoLayout } from "./BookmarkedVideoLayout/BookmarkedVideoLayout";
import { useSelector } from "react-redux";
import { selectBookmarkedVideos } from "../../redux/selectors/bookmarkVideoSelectors";
import { pushBookmarks, replaceBookmarks } from "../../redux/actions/bookmarkVideoActions";
import { listBookmarks, searchBookmarks } from "../../services/persistence/chromeStorage";
import { Store } from 'webext-redux';
import '../../App.css';
import { ports } from "../../constants/ports";
import useDebounce from "../hooks/useDebounce";

export const InfiniteScrollContainer = (
    props: {
      text: string;
    }
) => {
  const { text: searchQuery } = props;

  const [page, setPage] = useState(1);

  useDebounce(() => {
    // we want to get the list of videos from the storage
    const searchedVideos = searchQuery === ''
        ? listBookmarks()
        : searchBookmarks(searchQuery, 1);
    // and then update the redux store with the new list of videos
    searchedVideos.then((bookmarks: BookmarkedVideo[]) => {
      store.dispatch(replaceBookmarks(bookmarks));
      setPage(1);
      setHasMore(true);
    });
  }, [searchQuery], 500);

  const store = new Store({
    portName: ports.main
  });

  const videos = useSelector(selectBookmarkedVideos);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef<IntersectionObserver>();

  const lastVideoElementRef = useCallback(node => {
    if (hasMore) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    }
  }, [hasMore]);

  const requestNextPage = () => {
    if (page === 1 && videos?.length > 0) {
      return;
    }
    searchQuery === ''
        ? listBookmarks(page).then((bookmarks: BookmarkedVideo[]) => {
          if (bookmarks === undefined || bookmarks.length === 0) {
            setHasMore(false);
          } else {
            store.dispatch(pushBookmarks(bookmarks));
          }
        })
        : searchBookmarks(searchQuery, page).then((bookmarks: BookmarkedVideo[]) => {
          if (bookmarks === undefined || bookmarks.length === 0) {
            setHasMore(false);
          } else {
            store.dispatch(pushBookmarks(bookmarks));
          }
        });
  };

  useEffect(() => {
    requestNextPage();
  }, [page]);

  return (
      <div className={'bookmarkedVideos'}>
        {videos?.map((bv: BookmarkedVideo, i) => {
          if (videos?.length === i + 1) {
            return <BookmarkedVideoLayout key={i} bookmarkedVideo={bv} ref={lastVideoElementRef}/>;
          } else {
            return <BookmarkedVideoLayout key={i} bookmarkedVideo={bv}/>;
          }
        })}
      </div>
  );
};
