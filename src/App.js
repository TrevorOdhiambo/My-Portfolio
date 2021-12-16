import React from "react";
import "./style.css";
import Navbar from './Nav/Navbar'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
export default function App() {
  return (
    <div>
     <Hero/>
     <Projects/>
     <Skills/>
     <Contact/>
    </div>
  );
}
