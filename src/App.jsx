import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollHandler from "./ScrollHandler";
import './App.css'

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <ScrollHandler />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
     </BrowserRouter>
    </>
  );
}
