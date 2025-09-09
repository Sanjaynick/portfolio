import React, { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Git", level: 70 },
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
