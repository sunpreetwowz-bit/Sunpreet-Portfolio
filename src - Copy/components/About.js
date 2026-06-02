import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about-card about-info" data-aos="fade-up">
          <div className="section-header section-header--left">
            <span className="section-eyebrow">About me</span>
            <h2 className="section-title gradient-text">Sunpreet Shah</h2>
          </div>
          {/* <h3>
            MERN Stack <span>Developer</span> focused on thoughtful, user-centered products.
          </h3>
 */}      
          {/* <h3>
            Web <span>Developer</span> focused on thoughtful, user-centered products.
          </h3> */}

         <p>Senior Web <span>Developer</span> with 5+ years of experience designing, developing, and maintaining scalable web applications, SaaS platforms, business portals, CRM/ERP systems, and eCommerce solutions. Proficient in PHP, Laravel, CodeIgniter, WordPress, WooCommerce, MySQL, REST APIs, JavaScript, jQuery, and Bootstrap.
          </p>
          <p>
          Experienced in API development, third-party integrations, payment gateway implementation, database optimization, and application performance enhancement.
          </p>
          <p>
          Successfully delivered 30+ projects for international clients while collaborating with cross-functional teams throughout the software development lifecycle.
          </p>
          <p>Passionate about writing clean, maintainable code and building secure, high-performance applications that drive business growth.</p>
          <a
            href="https://drive.google.com/file/d/1RHS_7PVtMqYEGDJnPlAQzbEkTuhZfqgb/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
