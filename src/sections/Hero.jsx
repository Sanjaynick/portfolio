import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from '../assets/sanjay-photo.jpg'
import CV from '../assets/sanjay-kumar-cv.pdf'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="image-div">
    <img src={ProfileImg} alt="" />
      </div>
      <div>
        <h1>
          Hi, I'm <span className="highlight">Sanjay Kumar V</span>
        </h1>
        <p>Frontend Developer | React JS</p>
        <div className="hero-buttons">
          <Link to="/#contact" className="btn">Contact Me</Link>
          <Link to="/#projects" className="btn">Projects</Link>
          <a href={CV} target="_blank" download className="btn outline">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
