import React from 'react';  
import { Hero } from './components/Hero/Hero.jsx';
import{ About } from './components/About/About.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Experience } from './components/Experience/Experience.jsx';
import { Education } from './components/Education/Education.jsx';
import { Project } from './components/Project/project.jsx';
import { Contact } from "./components/Contact/Contact.jsx";
import styles from './App.module.css';  
function App() {
  return (
    <div className={styles.App}>  
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;

