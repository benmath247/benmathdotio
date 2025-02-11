import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeaturedProjects from '../components/FeaturedProjects';
import ParallaxBackground from '../components/ParallaxBackground';
import Footer from '../components/Footer';

function LoadingScreen() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "images/me/me.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      {!imageLoaded ? (
        <LoadingScreen />
      ) : (
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
                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <button className='secondary m-2'>
                    View My Blog
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <ParallaxBackground>
            <FeaturedProjects />
          </ParallaxBackground>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
