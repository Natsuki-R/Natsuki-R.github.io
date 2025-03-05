import React from "react";
import "./Bookmark.css";
import { BOOKMARKS, CHECK_LIST } from "../data/bookmark";
import { Bookmark as BookmarkType } from "../types/bookmark";

const BookmarkItem: React.FC<{ bookmark: BookmarkType }> = ({ bookmark }) => {
  return (
    <div
      className={`bookmark-item ${
        bookmark.category?.toLowerCase().replace(" ", "-") || ""
      }`}
    >
      <div className="bookmark-header">
        <h3 className="bookmark-title">
          <div>
            <span className="original-text">{bookmark.title}</span>
            <span className="hover-text">{bookmark.title}</span>
          </div>
        </h3>
        {/* {bookmark.category && (
          <span className="bookmark-category">{bookmark.category}</span>
        )} */}
      </div>

      {bookmark.description && (
        <p className="bookmark-description">{bookmark.description}</p>
      )}

      <div className="bookmark-links">
        {bookmark.url && (
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        )}

        {bookmark.noteUrl && (
          <a href={bookmark.noteUrl} target="_blank" rel="noopener noreferrer">
            MyNote
          </a>
        )}
      </div>
    </div>
  );
};

const Bookmark: React.FC = () => {
  return (
    <section id="bookmark" className="bookmark">
      <div className="bookmark-section">
        <h2>Completed Learning</h2>
        <div className="bookmark-grid">
          {BOOKMARKS.map((bookmark, index) => (
            <BookmarkItem key={index} bookmark={bookmark} />
          ))}
        </div>
      </div>

      <div className="bookmark-section">
        <h2>Future Learning Checklist</h2>
        <div className="bookmark-grid">
          {CHECK_LIST.map((bookmark, index) => (
            <BookmarkItem
              key={index}
              bookmark={{
                ...bookmark,
                ...(bookmark.completed === false && {
                  className: "not-completed",
                }),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
