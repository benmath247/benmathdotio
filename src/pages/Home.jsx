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
            src="https://media.licdn.com/dms/image/D4E03AQH--5mTLwHlBQ/profile-displayphoto-shrink_400_400/0/1664807111568?e=1709769600&v=beta&t=Ml3wEiJek-1V5TT8XKRLVO6xawYpsLKcAt_JokLBEUI" // Replace with the actual path to your image
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
          <Link to="/portfolio" className="btn btn-light btn-lg grow-on-hover" style={{ width: "150px", margin: "15px" }}>View My Portfolio</Link>
          <Link to="/blog" className="btn btn-light btn-lg grow-on-hover" style={{ width: "150px", margin: "15px" }}>View My Blog</Link>
        </div>
      </section >
    </div >
  );
}

export default Home;
