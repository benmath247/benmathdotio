import React from 'react';
import { Link } from 'react-router-dom';
// import TextColorChanging from '../components/TextColorChanging';
import FeaturedProjects from '../components/FeaturedProjects';
import ParallaxBackground from '../components/ParallaxBackground';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='background'>
      <section className="hero background py-5">
        <div style={{ paddingTop: "50px" }} className="container text-center">
          <img
            src="images/me/me.png"
            alt="Ben Math"
            className="rounded-circle mb-4 grow-on-hover border border-secondary border-2"
            width="300"
          />
          <h1 style={{ maxWidth: "100%" }}>WELCOME TO BENMATH.COM</h1>
          <h3 className="lead">
            Venture within for thoughts on my personal and professional life or to see projects I have worked on.
          </h3>
          <div>
            {/* <Link
              to="/portfolio"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className='m-2'>
                View My Portfolio
              </button>
            </Link> */}
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className='secondary m-2'>
                View My Blog
              </button>
            </Link>
          </div>
        </div>
      </section >
      <ParallaxBackground>
        <FeaturedProjects />
      </ParallaxBackground>
      <Footer />
    </div >
  );
}

export default Home;
