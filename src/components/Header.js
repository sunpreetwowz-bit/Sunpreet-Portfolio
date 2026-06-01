import React from 'react';
import './Header.css';
import profileImg from '../1759734943056.jpg';
//import profileImg from '../logo.svg';

function Header() {
  return (
    <section id="home">
      <div className="hero">
        <div className="hero-info">
          <span className="hero-eyebrow" data-aos="fade-up">Web Developer</span>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Hi, I&apos;m <span>Sunpreet Shah</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            I build clean, accessible web experiences with React and modern JavaScript.
          </p>
          <div className="hero-btns" data-aos="fade-up" data-aos-delay="300">
            <a href="#skills">
              <button type="button" className="btn btn-primary">View skills</button>
            </a>
            <a href="#contact">
              <button type="button" className="btn btn-outline">Contact me</button>
            </a>
          </div>
          <div className="social-icons" data-aos="fade-up" data-aos-delay="400">
            <a href="https://www.linkedin.com/in/sunpreet-shah-78544291/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/sunpreetwowz-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="hero-img" data-aos="fade-left" data-aos-delay="200">
          <div className="hero-img-frame">
            <img src={profileImg} alt="Sunpreet Shah" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
