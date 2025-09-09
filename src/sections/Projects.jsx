import React from "react";
import { Link } from "react-router-dom";
import MovieImg from '../../src/assets/movie-site-screenshot.png'

export default function Projects() {
  const projects = [
    { 
      title: "Movie Review & Rating Site", 
      desc: "React", 
      link: "https://sanjaynick.github.io/movie-review-site/" ,
      img : MovieImg
    },

  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {
        projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.img} alt="" />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <Link to={project.link} target="_blank" rel="noreferrer" className="btn outline">
              View
            </Link>
          </div>
        ))
        }
      </div>
    </section>
  );
}
