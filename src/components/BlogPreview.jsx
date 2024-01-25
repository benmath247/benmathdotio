import React, { useState } from 'react';

function BlogPreview({ title, subtitle, id, content, date }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card mb-4">
      <div className="card-body bg-dark">
        <h2 className="card-title text-light">{title}</h2>
        <h6 className='card-date text-light mb-2'>{date}</h6>
        <p className="card-text text-light">{subtitle}</p>
        {expanded ? (
            <><div className='container'>
            <div className='text-light bg-dark' dangerouslySetInnerHTML={{ __html: content }} />
          </div>
            <button className="btn btn-primary" onClick={toggleExpansion}>
              Show Less
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={toggleExpansion}>
            Read More
          </button>
        )}
      </div>
    </div>
  );
}

export default BlogPreview;
