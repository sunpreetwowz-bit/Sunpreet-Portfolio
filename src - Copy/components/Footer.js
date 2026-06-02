import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="links">
          <h3>Sunpreet Shah</h3>
          <p>Building thoughtful web experiences with PHP and Laravel.</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/sunpreet-shah-78544291/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="https://github.com/sunpreetwowz-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Education</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="links">
          <h3>Connect</h3>
          <ul>
            <li><a href="#contact">Send a message</a></li>
          </ul>
        </div>
        <p className="footer-bottom">
          &copy; {year} Sunpreet Shah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
