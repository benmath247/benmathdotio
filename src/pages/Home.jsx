import React from 'react';
import { Link } from 'react-router-dom';
import TextColorChanging from '../components/TextColorChanging';


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
          <p className="lead">
            Venture within for thoughts on my personal and professional life or to see projects I have worked on.
          </p>

          {/* <p>
            I have a passion for coding with JavaScript, Python, and Java.
            I enjoy working on projects that make a difference for my community, customers, and the world.
          </p> */}
          <Link to="portfolio" className="btn btn-light btn-lg grow-on-hover" style={{ width: "150px", margin: "15px" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>View My Portfolio</Link>
          <Link to="blog" className="btn btn-light btn-lg grow-on-hover" style={{ width: "150px", margin: "15px" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>View My Blog</Link>
        </div>
      </section >
    </div >
  );
}

export default Home;
