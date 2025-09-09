import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">Sanjay Kumar V</h2>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/#" className={activeSection === "home" ? "active" : ""} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/#about" className={activeSection === "about" ? "active" : ""} onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/#skills" className={activeSection === "skills" ? "active" : ""} onClick={() => setIsOpen(false)}>
          Skills
        </Link>
        <Link to="/#projects" className={activeSection === "projects" ? "active" : ""} onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
