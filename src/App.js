import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
