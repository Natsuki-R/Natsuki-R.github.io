import React from "react";
import "./Blog.css";
import { sortedPosts as POSTS } from "../data/post";

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      {POSTS.map((post, index) => (
        <div key={index} className="post">
          <span className="timestamp">{post.timeStamp}</span>

          <div className="post-content">
            {post.content.split("/n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
            {post.location && (
              <p className="location">Location: {post.location}</p>
            )}
            <div className="post-links">
              {post.links?.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="post-images">
              {post.images?.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={`Post Image ${image.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
