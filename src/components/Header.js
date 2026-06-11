import React from 'react';
import './Header.css';
import profileImg from '../1759734943056.jpg';

function Header() {
  return (
    <section id="home">
      <div className="hero">
        <div className="hero-info">
          <div className="hero-badge" data-aos="fade-up">
            <span className="hero-badge-dot" />
            Available for freelance & full-time
          </div>
          <span className="hero-eyebrow" data-aos="fade-up" data-aos-delay="50">
            Senior Web Developer
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Hi, I&apos;m <span>Sunpreet Shah</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150">
            I design and build scalable web apps, SaaS platforms, and eCommerce solutions
            with PHP, Laravel, WordPress, and modern JavaScript.
          </p>
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="200">
            <div className="stat-card">
              <strong>5+</strong>
              <span>Years experience</span>
            </div>
            <div className="stat-card">
              <strong>30+</strong>
              <span>Projects delivered</span>
            </div>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>
          </div>
          <div className="hero-btns" data-aos="fade-up" data-aos-delay="250">
            <a href="#project">
              <button type="button" className="btn btn-primary">View work</button>
            </a>
            <a href="#contact">
              <button type="button" className="btn btn-outline">Let&apos;s talk</button>
            </a>
          </div>
          <div className="social-icons" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.linkedin.com/in/sunpreet-shah-78544291/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/sunpreetwowz-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="hero-visual" data-aos="fade-left" data-aos-delay="150">
          <div className="hero-float-card hero-float-card--1">
            <i className="fa-solid fa-code" /> Laravel & PHP
          </div>
          <div className="hero-float-card hero-float-card--2">
            <i className="fa-solid fa-globe" /> 30+ Live Sites
          </div>
          <div className="hero-img-frame">
            <img src={profileImg} alt="Sunpreet Shah" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
