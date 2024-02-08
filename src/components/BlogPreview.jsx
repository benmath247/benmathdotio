import React, { useState, useEffect } from 'react';

function BlogPreview({ title, subtitle, id, content, date, setKey }) {
  const [expanded, setExpanded] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // Fetch HTML content when the component mounts
    async function fetchHtmlContent() {
      try {
        const response = await fetch(content);
        if (response.ok) {
          const html = await response.text();
          setHtmlContent(html);
        } else {
          console.error('Failed to fetch HTML content');
        }
      } catch (error) {
        console.error('Error fetching HTML content', error);
      }
    }

    if (expanded) {
      fetchHtmlContent();
    }
  }, [expanded, content]);

  return (
    <div className="card mb-4 position-relative"> {/* Added position-relative class */}
      <div className="card-body bg-dark">
        <h2 className="card-title text-light">{title}</h2>
        <h6 className='card-date text-light mb-2'>{date}</h6>
        <p className="card-text text-light">{subtitle}</p>
        {expanded ? (
          <>
            <div className='container'>
              <div className='text-light bg-dark' dangerouslySetInnerHTML={{ __html: htmlContent }} />
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
        {/* Diagonal decoration */}
        <div className="diagonal-decoration"></div>
      </div>
    </div>
  );
}

export default BlogPreview;