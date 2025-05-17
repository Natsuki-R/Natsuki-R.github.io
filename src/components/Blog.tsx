import React, { useState, useEffect, useMemo } from "react";
import "./Blog.css";
import { sortedPosts as POSTS } from "../data/post";

const POSTS_PER_PAGE = 7;

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

  // Parse markdown-like formatting in post content
  const parseContent = (content?: string): React.ReactNode => {
    if (!content) return null;

    // Split by <br> 
    let parts = content.split("<br>");

    return parts.map((part, lineIdx) => {
      const elements: React.ReactNode[] = [];
      let remainingText = part;

      // Process text for markdown-like formatting
      const processText = (text: string): React.ReactNode => {
        text = text.replace(/\*\*\*([^*]+)\*\*\*/g, '<span style="font-weight: bold; font-style: italic;">$1</span>');
        text = text.replace(/\*\*([^*]+)\*\*/g, '<span style="font-weight: bold;">$1</span>');
        text = text.replace(/\*([^*]+)\*/g, '<span style="font-style: italic;">$1</span>');
        // Return as dangerouslySetInnerHTML to render the HTML tags
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
      };

      // handle URLs with multiple parentheses 
      let textSoFar = '';
      let inLink = false;
      let linkText = '';
      let linkUrl = '';
      let openParens = 0;

      for (let i = 0; i < remainingText.length; i++) {
        const char = remainingText[i];
        const nextChar = i < remainingText.length - 1 ? remainingText[i + 1] : '';

        if (!inLink && char === '[') {
          // Start of link text
          if (textSoFar) {
            elements.push(processText(textSoFar));
            textSoFar = '';
          }
          inLink = true;
          linkText = '';
        } else if (inLink && char === ']' && nextChar === '(') {
          // End of link text, start of URL
          linkUrl = '';
          i++; // Skip the '('
          openParens = 1;
        } else if (inLink && openParens > 0) {
          if (char === '(') {
            openParens++;
            linkUrl += char;
          } else if (char === ')') {
            openParens--;
            if (openParens === 0) {
              // End of URL, add link element
              elements.push(
                <a
                  key={`${lineIdx}-link-${elements.length}`}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkText}
                </a>
              );
              inLink = false;
            } else {
              linkUrl += char;
            }
          } else {
            linkUrl += char;
          }
        } else if (inLink && openParens === 0 && char !== ']') {
          linkText += char;
        } else if (!inLink) {
          textSoFar += char;
        }
      }

      // Add any remaining text
      if (textSoFar) {
        elements.push(processText(textSoFar));
      }

      return (
        <React.Fragment key={lineIdx}>
          {elements.length > 0 ? elements : processText(part)}
          {lineIdx < parts.length - 1 && <br />}
        </React.Fragment>
      );
    });
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
                {post.header && (
                  <h2 className="post-header">{post.header}</h2>
                )}
                <time
                  className="timestamp"
                  dateTime={post.parsedDate.toISOString()}
                >
                  {formatDate(post.parsedDate)}
                </time>
                <div className="post-content">
                  {parseContent(post.content)}
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
                      {post.images.map((image, idx) => (
                        <img
                          key={idx}
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
                    className={`page-indicator ${currentPage === page ? "active" : ""
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