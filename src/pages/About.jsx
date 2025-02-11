import React from 'react';
import { FaLaptopCode, FaHiking, FaUtensils } from 'react-icons/fa'; // Import FontAwesome icons
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import Gallery from '../components/Gallery';

function About() {


  return (
    <div>
      <section className="jumbotron text-center bg-dark">
        <div className="container">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQH--5mTLwHlBQ/profile-displayphoto-shrink_400_400/0/1664807111568?e=1709769600&v=beta&t=Ml3wEiJek-1V5TT8XKRLVO6xawYpsLKcAt_JokLBEUI" // Replace with the actual path to your profile picture
            alt="Me"
            className="rounded-circle mb-4"
            width="300"
          />
          <h1 className="display-4">About Me</h1>
          <p className="lead">
            I'm a passionate and creative Software Engineer based in Philadelphia,
            dedicated to making a positive impact through technology.
          </p>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>My Journey</h2>
            <p>
              My journey in the world of software engineering started at a young age
              when I discovered my love for coding. I pursued my passion by earning a
              degree in Computer Science from [Your University].
            </p>
            <p>
              Over the years, I've had the opportunity to work on a variety of projects,
              from building web applications that streamline business operations to
              developing mobile apps that enhance user experiences.
            </p>
          </div>
          <div className="col-md-6">
            <h2>My Interests</h2>
            <p>
              When I'm not coding, you can find me exploring the great outdoors.
              I'm an avid hiker and nature enthusiast, always seeking new adventures
              in the beautiful landscapes around Philadelphia.
            </p>
            <p>
              I'm also a foodie and love experimenting with new recipes in the kitchen.
              You might even catch me at the latest food festival in town!
            </p>
          </div>
        </div>
      </section>

      <section className="container what-i-do mt-5">
        <h2 className="text-center what-i-do-title">What I Do</h2>
        <div className="row what-i-do-row">
          <div className="col-md-4">
            <Card className="mb-4 what-i-do-card">
              <Card.Body>
                <FaLaptopCode className="display-4 text-primary mb-3" />
                <h5 className="card-title">Coding</h5>
                <p className="card-text">
                  I'm passionate about writing clean and efficient code. Solving complex
                  problems with technology is what I do best.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4 what-i-do-card">
              <Card.Body>
                <FaHiking className="display-4 text-success mb-3" />
                <h5 className="card-title">Exploring</h5>
                <p className="card-text">
                  I love exploring the outdoors, from hiking in the mountains to camping by
                  the lakeside. Nature inspires me.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4 what-i-do-card">
              <Card.Body>
                <FaUtensils className="display-4 text-warning mb-3" />
                <h5 className="card-title">Cooking</h5>
                <p className="card-text">
                  In the kitchen, I'm an adventurer too. Trying new recipes and flavors
                  is a delightful experience.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mt-5">

      </section>

      <section className="container text-center mt-5">
        <Button href="/contact" variant="primary" size="lg">
          Get in Touch
        </Button>
      </section>
    </div>
  );
}

export default About;
