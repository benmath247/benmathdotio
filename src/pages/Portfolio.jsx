import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  const [key, setKey] = useState('games'); // Default active tab
  const [gamesPosts, setGamesPosts] = useState([]);
  const [websitesPosts, setWebsitesPosts] = useState([]);
  const [toolsPosts, setToolsPosts] = useState([]);
  const [demosPosts, setDemosPosts] = useState([]);

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
      // {
      //   title: 'Days Since I Quit Smoking',
      //   subtitle: 'Counting the days since I quit',
      //   image: '/portfolio/tools/json-response.png',
      //   link: 'days-since-quit'
      // },
    ];
    const demos = [
      {
        title: 'Hello, world!',
        subtitle: 'Making a better site with ChatGPT in an afternoon.',
        image: './projects/demos/HelloWorld.html',
        link: 'January 1, 2024'
      },
    ];

    // Fetch and set content for each project post
    Promise.all(
      games.map((post) =>
        fetchContent('games', post.image).then((content) => ({
          ...post,
          content,
        }))
      )
    ).then((posts) => setGamesPosts(posts));

    Promise.all(
      websites.map((post) =>
        fetchContent('websites', post.image).then((content) => ({
          ...post,
          content,
        }))
      )
    ).then((posts) => setWebsitesPosts(posts));

    Promise.all(
      tools.map((post) =>
        fetchContent('tools', post.image).then((content) => ({
          ...post,
          content,
        }))
      )
    ).then((posts) => setToolsPosts(posts));

    Promise.all(
      demos.map((post) =>
        fetchContent('demos', post.image).then((content) => ({
          ...post,
          content,
        }))
      )
    ).then((posts) => setDemosPosts(posts));
  }, []);

  // Create a function to render project previews for a given category
  const renderProjectPreviews = (category, posts) => {
    return (
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4  position-relative grow-on-hover" key={post.title}>
            <a href={post.link} rel="noopener noreferrer">
              <div className="blue-card card mt-4">
                <img
                  src={post.image} // Replace with the actual path to your project images
                  alt={post.title}
                  className="card-img-top"
                />
                <div className="blue-card-body card p-2">
                  <h5 className="blue-card-title">{post.title}</h5>
                  <p className="blue-card-text">{post.subtitle}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='background'>

      <div className="container mt-5">
        <h1 className="text-center">Portfolio</h1>
        <Tab.Container id="project-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
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
              {/* <Nav.Item>
              <Nav.Link eventKey="demos">Demos</Nav.Link>
            </Nav.Item> */}
            </Nav>
          </Container>

          <Tab.Content>
            <Tab.Pane eventKey="games">{renderProjectPreviews('games', gamesPosts)}</Tab.Pane>
            <Tab.Pane eventKey="websites">{renderProjectPreviews('websites', websitesPosts)}</Tab.Pane>
            <Tab.Pane eventKey="tools">{renderProjectPreviews('tools', toolsPosts)}</Tab.Pane>
            {/* <Tab.Pane eventKey="demos">{renderProjectPreviews('demos', demosPosts)}</Tab.Pane> */}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}

export default Portfolio;
