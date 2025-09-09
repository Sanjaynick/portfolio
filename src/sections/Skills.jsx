import React, { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 60 },
    { name: "Git", level: 70 },
    { name: "My SQL", level: 55},
    { name: "Figma", level: 50}

  ];

  const [animated, setAnimated] = useState(false);

  // Animate progress bars when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    const section = document.querySelector("#skills");
    if (section) observer.observe(section);
  }, []);

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: animated ? `${skill.level}%` : "0%" }}
              >

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
