import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogPreview({ title, subtitle, date }) {

  return (
    <div className="card position-relative border-gradient" style={{ minHeight: '300px', maxHeight: '400px' }}>
      <div className="card-body bg-dark">
        <h2 className="text-light">{title}</h2>
        <h6 className='text-light mb-2'>{date}</h6>
        <p className="text-light">{subtitle}</p>
        <Link to={`/blog/${title}`}>
          <button className="secondary"
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