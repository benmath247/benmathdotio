import React from 'react';
import { Link } from 'react-router-dom';
import TextColorChanging from '../components/TextColorChanging';
import FeaturedProjects from '../components/FeaturedProjects';


function Home() {
  const images = [];
  for (let i = 1; i <= 151; i++) {
    images.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
  }

  return (
    <div className='background'>
      <section className="hero background py-5">
        <div style={{ paddingTop: "50px" }} className="container text-center">
          <img
            src="images/me/me.png"
            alt="Ben Math"
            className="rounded-circle mb-4 grow-on-hover"
            width="300"
          />
          <TextColorChanging text="WELCOME TO BENMATH.COM" size="60" />
          <title>WELCOME TO BENMATH.COM</title>
          <h2 className="lead">
            Venture within for thoughts on my personal and professional life or to see projects I have worked on.
          </h2>

          {/* <p>
            I have a passion for coding with JavaScript, Python, and Java.
            I enjoy working on projects that make a difference for my community, customers, and the world.
          </p> */}
          <div>
            <Link
              to="/portfolio"
              // className="btn btn-light btn-lg grow-on-hover fun-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className='m-2'>

                View My Portfolio
              </button>
            </Link>
            <Link
              to="/blog"
              // className="btn btn-light btn-lg grow-on-hover fun-button-alt"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className='secondary m-2'>

                View My Blog
              </button>
            </Link>
          </div>
        </div>
        <FeaturedProjects />
      </section >
    </div >
  );
}

export default Home;
