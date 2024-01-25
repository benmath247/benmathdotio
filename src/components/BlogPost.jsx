// src/components/BlogPost.js
import React from 'react';

function BlogPost({ title, content }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
