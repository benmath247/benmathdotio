import React from 'react';
import TabbedBlog from '../components/TabbedBlog';

function Home() {
  return (
    <div>
      <section className="hero bg-primary text-white py-5">
        <div  style={{paddingTop: "50px"}} className="container text-center">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQH--5mTLwHlBQ/profile-displayphoto-shrink_400_400/0/1664807111568?e=1709769600&v=beta&t=Ml3wEiJek-1V5TT8XKRLVO6xawYpsLKcAt_JokLBEUI" // Replace with the actual path to your image
            alt="Your Name"
            className="rounded-circle mb-4"
            width="150"
          />
          <h1>Welcome to My Personal Website</h1>
          <p className="lead">
            I'm Benjamin Math, a Software Engineer based in Philadelphia.
          </p>
          <p>
            I have a passion for coding with JavaScript, Python, and Java.
            I enjoy working on projects that make a difference for my community, customers, and the world.
          </p>
          <a href="/portfolio" className="btn btn-light btn-lg" style={{width: "150px", margin: "15px"}}>View My Portfolio</a>
          <a href="/blog" className="btn btn-light btn-lg" style={{width: "150px", margin: "15px"}}>View My Blog</a>
        </div>
      </section>

      {/* <section className="about-me py-5">
          <TabbedBlog/>
      </section> */}
    </div>
  );
}

export default Home;
