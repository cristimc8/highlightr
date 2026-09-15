import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaCopy, FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";
import { BookmarkedVideo } from "../../../models/BookmarkedVideo";
import { deleteCheckpoint } from "../../../redux/actions/bookmarkVideoActions";

export const BookmarkedVideoInfo = (props: {
  bookmarkedVideo: BookmarkedVideo;
}) => {
  const dispatch = useDispatch();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDeleteCheckpoint = (checkpointTime: number) => {
    const isLastCheckpoint = props.bookmarkedVideo.checkpoints.length === 1;
    const confirmMessage = isLastCheckpoint
      ? "This is the only checkpoint, removing it will delete the whole bookmark. Continue?"
      : "Remove this checkpoint?";
    if (window.confirm(confirmMessage)) {
      dispatch(deleteCheckpoint(props.bookmarkedVideo.videoId, checkpointTime));
    }
  };

  const fallbackCopy = (url: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = url;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (e) {
      // clipboard unavailable, nothing more we can do here
    }
    document.body.removeChild(textarea);
  };

  const handleCopyLink = (url: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
    setOpenIndex(null);
  };

  const closeIfLeavingRow = (i: number, relatedTarget: EventTarget | null) => {
    setOpenIndex((current) => {
      if (current !== i) return current;
      return null;
    });
  };

  return (
    <div className={"bookmarkedVideo__info"}>
      <span className={"bookmarkedVideo__info__title"}>
        {props.bookmarkedVideo.title.length > 35
          ? props.bookmarkedVideo.title.substring(0, 34) + "..."
          : props.bookmarkedVideo.title}
      </span>
      <div className={"bookmarkedVideo__info__checkpoints"}>
        <div className={"bookmarkedVideo__info__checkpoints__line"}>
          {props.bookmarkedVideo.checkpoints.map((checkpoint, i) => {
            const leftPercent =
              (checkpoint.time / props.bookmarkedVideo.length) * 100;
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={
                  "bookmarkedVideo__info__checkpoints__line__checkpointWrapper" +
                  (isOpen
                    ? " bookmarkedVideo__info__checkpoints__line__checkpointWrapper--open"
                    : "")
                }
                style={{ left: `${leftPercent}%` }}
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => closeIfLeavingRow(i, null)}
                onFocus={() => setOpenIndex(i)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    closeIfLeavingRow(i, e.relatedTarget);
                  }
                }}
              >
                <div
                  className={
                    "bookmarkedVideo__info__checkpoints__line__checkpointMenu"
                  }
                >
                  <a
                    href={checkpoint.url}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={
                      "bookmarkedVideo__info__checkpoints__line__checkpointMenu__item"
                    }
                  >
                    <FaExternalLinkAlt />
                    <span>Go to</span>
                  </a>
                  <button
                    type={"button"}
                    className={
                      "bookmarkedVideo__info__checkpoints__line__checkpointMenu__item"
                    }
                    onClick={() => handleCopyLink(checkpoint.url)}
                  >
                    <FaCopy />
                    <span>Copy link</span>
                  </button>
                  <button
                    type={"button"}
                    className={
                      "bookmarkedVideo__info__checkpoints__line__checkpointMenu__item bookmarkedVideo__info__checkpoints__line__checkpointMenu__item--danger"
                    }
                    onClick={() => handleDeleteCheckpoint(checkpoint.time)}
                  >
                    <FaTrashAlt />
                    <span>Delete</span>
                  </button>
                </div>
                <a
                  href={`${checkpoint.url}`}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div
                    className={
                      "bookmarkedVideo__info__checkpoints__line__checkpoint"
                    }
                    style={{ backgroundColor: checkpoint.checkpointColor }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
