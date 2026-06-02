import React from 'react';
import './About.css';

const highlights = [
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full-stack delivery',
    text: 'End-to-end web apps, CRM/ERP systems, and business portals.',
  },
  {
    icon: 'fa-solid fa-plug',
    title: 'Integrations & APIs',
    text: 'Payment gateways, third-party APIs, and RESTful services.',
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Performance focused',
    text: 'Clean code, database optimization, and secure architecture.',
  },
];

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about-grid">
          <div className="about-card about-info" data-aos="fade-up">
            <div className="section-header section-header--left">
              <span className="section-eyebrow">About me</span>
              <h2 className="section-title gradient-text">Sunpreet Shah</h2>
            </div>
            <p>
              Senior Web <span>Developer</span> with 5+ years of experience designing, developing,
              and maintaining scalable web applications, SaaS platforms, business portals, CRM/ERP
              systems, and eCommerce solutions.
            </p>
            <p>
              Proficient in PHP, Laravel, CodeIgniter, WordPress, WooCommerce, MySQL, REST APIs,
              JavaScript, jQuery, and Bootstrap — with a track record of 30+ international client projects.
            </p>
            <p>
              Passionate about writing clean, maintainable code and building secure, high-performance
              applications that drive business growth.
            </p>
            <a
              href="https://drive.google.com/file/d/1RHS_7PVtMqYEGDJnPlAQzbEkTuhZfqgb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">Download CV</button>
            </a>
          </div>
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="highlight-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <i className={item.icon} />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
