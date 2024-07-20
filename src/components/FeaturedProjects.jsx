import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function FeaturedProjects() {
    const [key, setKey] = useState('games'); // Default active tab
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Number of items per page
    const [toolsPosts, setToolsPosts] = useState([]);

    useEffect(() => {
        // Function to fetch HTML content from a file
        const fetchContent = async (category, content) => {
            try {
                const response = await fetch(content); // Replace with the actual path to your project content folder
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

        // Define project posts for each category with filenames instead of content
        const featuredProjects = [
            {
                title: 'Roth IRA Simulator',
                subtitle: 'Enter inputs for investment scenarios and see how a Roth IRA can help you make money!',
                image: '/portfolio/tools/roth.jpeg',
                link: '/rothira'
            },
            {
                title: 'Pokedex',
                subtitle: 'Using the PokeAPI to build a Pokedex',
                image: '/portfolio/games/pokedex.webp',
                link: '/pokedex'
            },
            {
                title: 'Pokemon Hangman',
                subtitle: "Who's that Pokemon?!",
                image: '/portfolio/games/pokemon.jpeg',
                link: '/hangman'
            },
            {
                title: 'Memory',
                subtitle: "Use your memory to match all of the emojis",
                image: '/portfolio/games/memory.jpeg',
                link: '/memory'
            },
            {
                title: 'Dictation',
                subtitle: 'Using the browser`s built in audio to text tool for dictation',
                image: '/portfolio/tools/dictation.jpeg',
                link: '/dictation'
            },
        ];

        Promise.all(
            featuredProjects.map((post) =>
                fetchContent('featuredProjects', post.image).then((content) => ({
                    ...post,
                    content,
                }))
            )
        ).then((posts) => setToolsPosts(posts));

    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(toolsPosts.length / itemsPerPage);

    // Function to handle page navigation
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Slice posts array to show only items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = toolsPosts.slice(indexOfFirstItem, indexOfLastItem);

    // Render project previews
    const renderProjectPreviews = (category, posts) => {
        return (
            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-4 mb-4 position-relative grow-on-hover" key={post.title}>
                        <Link to={post.link} rel="noopener noreferrer" style={{ background: 'none' }}>
                            <div className="card position-relative" style={{ minHeight: '300px', maxHeight: '400px' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="card-img-top"
                                />
                                <div className="blue-card-body card-body bg-dark">
                                    <h5 className="blue-card-title p-2 text-light">{post.title}</h5>
                                    <p className="blue-card-text p-2 text-light">{post.subtitle}</p>
                                </div>
                                <div className="diagonal-decoration"></div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    };

    // Render pagination controls
    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
                </li>
            );
        }
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {pageNumbers}
                </ul>
            </nav>
        );
    };

    return (
        <div className='background'>
            <div className="container mt-5">
                <h3 className="text-start mb-3">My Favorite Projects</h3>
                <Tab.Container id="project-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                    <Tab.Content>
                        {renderProjectPreviews('tools', currentItems)}
                        {renderPagination()}
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
}

export default FeaturedProjects;
