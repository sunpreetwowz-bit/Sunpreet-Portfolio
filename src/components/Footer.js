import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="links">
          <h3 className="gradient-text">Sunpreet Shah</h3>
          <p>Senior Web Developer crafting scalable apps, eCommerce platforms, and client websites worldwide.</p>
          <div className="social">
            /* <a href="https://www.linkedin.com/in/sunpreet-shah-78544291/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a> */
            /* <a href="https://github.com/sunpreetwowz-bit" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a> */
            <a href="mailto:skillwavetechnologiesdev@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope" />
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
            <li><a href="mailto:skillwavetechnologiesdev@gmail.com">skillwavetechnologiesdev@gmail.com</a></li>
            <li><a href="#contact">Start a project</a></li>
          </ul>
        </div>
        <p className="footer-bottom">
          &copy; {year} Sunpreet Shah. Crafted with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
