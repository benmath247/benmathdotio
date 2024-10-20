import React, { useState, useEffect, useCallback } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import Footer from '../components/Footer';

function Portfolio() {
  const [key, setKey] = useState(''); // Default to show all projects
  const [gamesPosts, setGamesPosts] = useState([]);
  const [websitesPosts, setWebsitesPosts] = useState([]);
  const [toolsPosts, setToolsPosts] = useState([]);
  const [demosPosts, setDemosPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchContent = async (category, content) => {
    try {
      const response = await fetch(content);
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

  const fetchPosts = useCallback(async (pageNum) => {
    setLoading(true);
    try {
      const games = [
        {
          title: 'Pokedex',
          subtitle: 'Using the PokeAPI to build a Pokedex',
          image: '/portfolio/games/pokedex.webp',
          link: 'pokedex'
        },
        {
          title: 'Tik Tac Toe',
          subtitle: 'A simple Tik Tac Toe application',
          image: '/portfolio/games/ttt.png',
          link: 'tik-tac-toe'
        },
        {
          title: 'Pokemon Hangman',
          subtitle: "Who's that Pokemon?!",
          image: '/portfolio/games/pokemon.jpeg',
          link: 'hangman'
        },
        {
          title: 'Memory',
          subtitle: "Use your memory to match all of the emojis",
          image: '/portfolio/games/memory.jpeg',
          link: 'memory'
        },
        {
          title: 'Guess the Number',
          subtitle: "Guess a number between 1 and 100",
          image: '/portfolio/games/numbers.jpeg',
          link: 'numbers'
        },
      ];

      const websites = [
        {
          title: 'Frozen Rewards',
          subtitle: 'A Conagra Frozen Products rebates site',
          image: '/portfolio/websites/digitalReward.png',
          link: 'https://www.frozenrewardsclub.com'
        },
        {
          title: 'Club Publix Digital Event',
          subtitle: 'Brand promotion site for 90+ brands on behalf of Publix Grocery',
          image: '/portfolio/websites/multibrand.jpg',
          link: 'https://www.clubpublixdigitalevent.com'
        },
        {
          title: 'Penn Mutual Asset Management',
          subtitle: 'UI consulting for Penn Mutual Asset Management',
          image: '/portfolio/websites/pmam.png',
          link: 'https://www.pennmutualam.com'
        },
        {
          title: 'My Pantry Planner',
          subtitle: 'High level customization of a brand site product',
          image: '/portfolio/websites/mpp.jpeg',
          link: 'https://www.mypantryplanner.com'
        },
        {
          title: 'Spoonable Perks',
          subtitle: 'Using React to engage proprietary API to support a loyalty shopping program',
          image: '/portfolio/websites/spoonable.jpeg',
          link: 'https://www.spoonableperks.com'
        },
      ];

      const tools = [
        {
          title: 'Roth IRA Simulator',
          subtitle: 'Enter inputs for investment scenarios and see how a Roth IRA can help you make money!',
          image: '/portfolio/tools/roth.jpeg',
          link: 'rothira'
        },
        {
          title: 'Dictation',
          subtitle: 'Using the browser`s built in audio to text tool for dictation',
          image: '/portfolio/tools/dictation.jpeg',
          link: 'dictation'
        },
        {
          title: 'Translator',
          subtitle: 'Using Google Translate API to translate user input',
          image: '/portfolio/tools/translate.jpeg',
          link: 'translation'
        },
        {
          title: 'Color Pallet Assistance',
          subtitle: 'Helping me pick colors',
          image: '/portfolio/tools/paint.jpeg',
          link: 'colors'
        },
        {
          title: 'JSON Formatter',
          subtitle: 'Organizing JSON format strings so I can read them',
          image: '/portfolio/tools/json-response.png',
          link: 'json-formatter'
        },
      ];

      const demos = [
        // {
        //   title: 'Hello, world!',
        //   subtitle: 'Making a better site with ChatGPT in an afternoon.',
        //   image: '/portfolio/chatgpt.jpeg',
        //   link: 'January 1, 2024'
        // },
      ];

      const fetchContentWithCategory = (category) => {
        return category.map((post) =>
          fetchContent(category, post.image).then((content) => ({
            ...post,
            content,
          }))
        );
      };

      const fetchedGamesPosts = await Promise.all(fetchContentWithCategory(games));
      const fetchedWebsitesPosts = await Promise.all(fetchContentWithCategory(websites));
      const fetchedToolsPosts = await Promise.all(fetchContentWithCategory(tools));
      const fetchedDemosPosts = await Promise.all(fetchContentWithCategory(demos));

      setGamesPosts((prev) => [...prev, ...fetchedGamesPosts]);
      setWebsitesPosts((prev) => [...prev, ...fetchedWebsitesPosts]);
      setToolsPosts((prev) => [...prev, ...fetchedToolsPosts]);
      setDemosPosts((prev) => [...prev, ...fetchedDemosPosts]);

      if (fetchedGamesPosts.length === 0 && fetchedWebsitesPosts.length === 0 && fetchedToolsPosts.length === 0 && fetchedDemosPosts.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page, fetchPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || !hasMore) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const renderProjectPreviews = (posts) => {
    const rows = [];
    for (let i = 0; i < posts.length; i += 4) {
      rows.push(posts.slice(i, i + 4));
    }

    return (
      <div>
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((post) => (
              <div className="col-md-3 mb-4 position-relative grow-on-hover" key={post.title}>
                <a href={post.link} rel="noopener noreferrer">
                  <div className="card border-gradient-light">
                    <img
                      src={post.image}
                      alt={post.title}
                      className=""
                    />
                    <div className="blue-card-body card-body bg-dark">
                      <h5 className="blue-card-title p-2 text-light">{post.title}</h5>
                      <p className="blue-card-text p-2 text-light">{post.subtitle}</p>
                    </div>
                    <div className="diagonal-decoration"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const getFilteredPosts = () => {
    if (!key) {
      const allPosts = shuffleArray([...gamesPosts, ...websitesPosts, ...toolsPosts, ...demosPosts]);
      const uniquePosts = Array.from(new Set(allPosts.map(post => post.title)))
        .map(title => allPosts.find(post => post.title === title));
      return uniquePosts;
    }
    switch (key) {
      case 'games':
        return gamesPosts;
      case 'websites':
        return websitesPosts;
      case 'tools':
        return toolsPosts;
      default:
        return [];
    }
  };

  const handleSelect = (k) => {
    setKey((prevKey) => (prevKey === k ? '' : k));
  };

  return (
    <div className="background">
      <div className="container mt-5">
        <h1 className="text-center">Portfolio</h1>
        <Tab.Container id="project-tabs" activeKey={key} onSelect={handleSelect}>
          <Container>
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="games">Games</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="websites">Websites</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tools">Tools</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
          <Tab.Content>
            <Tab.Pane eventKey={key}>
              {renderProjectPreviews(getFilteredPosts())}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        {loading && <p>Loading more projects...</p>}
        {!hasMore && <p>No more projects to load.</p>}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
