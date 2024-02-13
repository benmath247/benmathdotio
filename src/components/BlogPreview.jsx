import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogPreview({ title, subtitle, date }) {

  return (
    <div className="card mb-4 position-relative" style={{ height: '300px' }}> {/* Added position-relative class */}
      <div className="card-body bg-dark">
        <h2 className="card-title text-light">{title}</h2>
        <h6 className='card-date text-light mb-2'>{date}</h6>
        <p className="card-text text-light">{subtitle}</p>
        <Link to={`/blog/${title}`}>
          <button className="btn btn-primary grow-on-hover"
          >
            Read More
          </button>
        </Link >
        <div className="diagonal-decoration"></div>
      </div>
    </div>
  );
}

export default BlogPreview;