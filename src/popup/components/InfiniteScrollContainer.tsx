import { BookmarkedVideo } from "../../models/BookmarkedVideo";
import { useCallback, useEffect, useRef, useState } from "react";
import { BookmarkedVideoLayout } from "./BookmarkedVideoLayout/BookmarkedVideoLayout";
import { useSelector } from "react-redux";
import { selectBookmarkedVideos } from "../../redux/selectors/bookmarkVideoSelectors";
import { pushBookmarks } from "../../redux/actions/bookmarkVideoActions";
import { listBookmarks } from "../../services/persistence/chromeStorage";
import { Store } from 'webext-redux';
import '../../App.css';
import { ports } from "../../constants/ports";

export const InfiniteScrollContainer = () => {

  const store = new Store({
    portName: ports.main
  });

  const videos = useSelector(selectBookmarkedVideos);
  console.log("videos", videos);
  const [page, setPage] = useState(1);
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
    if(page === 1) {
      return;
    }
    listBookmarks(page).then((bookmarks: BookmarkedVideo[]) => {
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
