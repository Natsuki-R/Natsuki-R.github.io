import React, { useState, useEffect, useMemo } from "react";
import "./Blog.css";
import { sortedPosts as POSTS } from "../data/post";

const POSTS_PER_PAGE = 5;

// Formatter instances for reuse
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Reset to first page when year filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  // Extract unique years from post dates using the parsedDate
  const availableYears = useMemo(() => {
    const years = POSTS.map((post) => post.parsedDate.getFullYear());
    return [...new Set(years)].sort((a, b) => b - a); // Sort descending (newest first)
  }, []);

  // Filter posts by selected year using parsedDate
  const filteredPosts = useMemo(() => {
    if (!selectedYear) return POSTS;
    return POSTS.filter(
      (post) => post.parsedDate.getFullYear() === selectedYear
    );
  }, [POSTS, selectedYear]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Clean formatting function using Intl.DateTimeFormat
  const formatDate = (date: Date): string => {
    if (!date || isNaN(date.getTime())) {
      return "Invalid date";
    }

    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);

    return `${formattedDate} at ${formattedTime}`;
  };

  // Navigate to different pages
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="blog-container">
      <div className="blog-controls">
        <div className="year-filter">
          <label htmlFor="yearSelect">Filter by year: </label>
          <select
            id="yearSelect"
            value={selectedYear?.toString() || ""}
            onChange={(e) =>
              setSelectedYear(e.target.value ? parseInt(e.target.value) : null)
            }
          >
            <option value="">All Years</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="post-count">
            Showing {paginatedPosts.length} of {filteredPosts.length} posts
          </div>
        ) : (
          <div className="post-count">No posts found</div>
        )}
      </div>

      {paginatedPosts.length > 0 ? (
        <>
          <div className="posts-list">
            {paginatedPosts.map((post, index) => (
              <article key={index} className="post">
                <time
                  className="timestamp"
                  dateTime={post.parsedDate.toISOString()}
                >
                  {formatDate(post.parsedDate)}
                </time>
                <div className="post-content">
                  {post.content?.split("/n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  {post.links && post.links.length > 0 && (
                    <div className="post-links">
                      {post.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                  {post.images && post.images.length > 0 && (
                    <div className="post-images">
                      {post.images.map((image) => (
                        <img
                          key={image.id}
                          src={image.src}
                          alt={image.alt || ``}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                  {post.location && (
                    <p className="location">Location: {post.location}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo; Previous
            </button>

            <div className="page-indicators">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`page-indicator ${
                      currentPage === page ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next &raquo;
            </button>
          </div>
        </>
      ) : (
        <div className="empty-state">
          <p>Oops, No posts found for this year.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
