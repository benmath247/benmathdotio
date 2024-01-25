import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import BlogPreview from './BlogPreview'; // Import the BlogPreview component
import { technologyPostsData } from './technologyPostsData'; // Import technologyPostsData
import { personalPostsData } from './personalPostsData'; // Import personalPostsData
import { projectsPostsData } from './projectsPostsData'; // Import projectsPostsData


function TabbedBlog() {
  const [key, setKey] = useState('technology'); // Default active tab
  const [technologyPosts, setTechnologyPosts] = useState([]);
  const [personalPosts, setPersonalPosts] = useState([]);
  const [projectsPosts, setProjectsPosts] = useState([]);

  useEffect(() => {
    // Function to fetch HTML content from a file
    const fetchContent = async (category, content) => {
      try {
        const response = await fetch(content); // Use content directly as the URL
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const htmlContent = await response.text();
        return htmlContent;
      } catch (error) {
        console.error(error);
        return '';
      }
    };

    // Fetch and set content for each blog post
    Promise.all(
      technologyPostsData.map((post) =>
        fetchContent('technology', post.content).then((content) => ({
          ...post,
          content,
        }))
      )
    ).then((posts) => setTechnologyPosts(posts));

    Promise.all(
      personalPostsData.map((post) =>
        fetchContent('personal', post.content).then((content) => ({
          ...post,
          content,
        }))
      )
    ).then((posts) => setPersonalPosts(posts));

    Promise.all(
      projectsPostsData.map((post) =>
        fetchContent('projects', post.content).then((content) => ({
          ...post,
          content,
        }))
      )
    ).then((posts) => setProjectsPosts(posts));
  }, []);

  // Create a function to render blog previews for a given category
  const renderBlogPreviews = (category, posts) => {
    return (
      <div>
        {posts.map((post) => (
          <BlogPreview
            key={post.title} // Use a unique identifier (e.g., post title) as the key
            title={post.title}
            subtitle={post.subtitle}
            date={post.date}
            id={post.title} // Use the same unique identifier as the id
            content={post.content} // Pass the full content to each BlogPreview
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <h1 style={{paddingTop: "100px"}} className="text-center">Blog</h1>
      <Tab.Container id="blog-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <Container>
          <Nav variant="pills" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="technology">Technology</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="personal">Personal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="projects">Projects</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

        <Tab.Content>
          <Tab.Pane eventKey="technology">{renderBlogPreviews('technology', technologyPosts)}</Tab.Pane>
          <Tab.Pane eventKey="personal">{renderBlogPreviews('personal', personalPosts)}</Tab.Pane>
          <Tab.Pane eventKey="projects">{renderBlogPreviews('projects', projectsPosts)}</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default TabbedBlog;
