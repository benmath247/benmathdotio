// BlogDetail.js
import React from 'react';

function BlogDetail({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogDetail;
