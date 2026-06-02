import React from 'react';
import './Services.css';

const education = [
  {
    icon: 'fa-solid fa-code',
    title: 'Coding Ninjas',
    location: 'Online',
    detail: 'Certification in Machine Learning',
    meta: 'Pursuing',
  },
  {
    icon: 'fa-solid fa-computer',
    title: 'GGS College of Modern Technology',
    location: 'Kharar, Punjab',
    detail: 'Bachelors of Computer  Science',
    meta: 'Completed',
  }, 
  /* {
    icon: 'fa-solid fa-user-graduate',
    title: 'Pune University',
    location: 'Nashik, Maharashtra',
    detail: 'Bachelor of Science',
    meta: 'Pursuing',
  }, */
];

function Services() {
  return (
    <section id="services">
      <div className="services">
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic path and professional training</p>
        </div>
        <div className="services-cards">
          {education.map((item, index) => (
            <div
              key={item.title}
              className="services-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-icon">
                <i className={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <p>{item.detail}</p>
              <span className="card-meta">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
