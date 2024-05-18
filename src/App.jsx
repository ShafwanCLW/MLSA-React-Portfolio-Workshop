// Purpose: The App.jsx file acts as the root component of your React application.
// It holds and organizes all other components.

import styles from "./App.module.css";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";

import React from "react";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
