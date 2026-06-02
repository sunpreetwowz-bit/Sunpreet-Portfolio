import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Schedule Parlor',
    image: '../project-images/scheduleparlor.png',
    link: 'https://www.scheduleparlor.com/',
    external: true,
  },

  {
    title: 'Tagore Theater Chandigarh',
    image: '../project-images/tagoretheater.png',
    link: 'https://tagoretheatrechd.org/all/tagore/',
    external: true,
  },

  {
    title: 'Brittain Chiropractic Center',
    image: '../project-images/brittainchiropractor.png',
    link: 'https://www.brittianchiropracticcenter.com/',
    external: true,
  },


  {
    title: 'The Dew Drop kasauli',
    image: '../project-images/thedewdrops.png',
    link: 'https://thedewdropskasauli.com/',
    external: true,
  },


  {
    title: 'Universal Floor Mats',
    image: '../project-images/universalfloormats.png',
    link: 'https://www.universalfloormats.com/',
    external: true,
  },



  {
    title: 'The Dew Drop kasauli',
    image: '../project-images/ushomeinspectortraining.png',
    link: 'https://ushomeinspectortraining.com/',
    external: true,
  },

  {
    title: 'Jazel Repairs',
    image: '../project-images/jazelrepair.png',
    link: 'https://www.jazelrepairs.com/',
    external: true,
  },


  {
    title: 'Driver G',
    image: '../project-images/driverg.png',
    link: 'https://driverg.com/',
    external: true,
  },

  {
    title: 'Abhushan Ohio',
    image: '../project-images/abhushanohio.png',
    link: 'https://www.abhushanohio.com/',
    external: true,
  },

  {
    title: 'Hill Side',
    image: '../project-images/hillside.png',
    link: 'https://hillsidebreezekasauli.com/',
    external: true,
  },

  {
    title: 'Hill Side',
    image: '../project-images/talumnibiz.png',
    link: 'http://www.talumnibiz.com/',
    external: true,
  },


  {
    title: 'Weather Application',
    image: 'https://repository-images.githubusercontent.com/200318206/978d6f00-88dd-11ea-8727-1449bd91edc6',
    link: 'https://react-weather-app-github-io.vercel.app/',
    external: true,
  },
  {
    title: 'E-commerce Shopping',
    image: 'https://www.builderfly.com/wp-content/uploads/2020/05/What-are-ways-to-promote-a-clothing-e-Commerce-website-min.jpg',
    link: 'https://apparels-github-io.vercel.app/',
    external: true,
  },
  {
    title: 'Calculator Application',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPtL6zMy8b-Ee7tGhjCdKX7U04vdpRllESobZ3j0MYQ&s',
    link: 'https://react-calculator-nine-flame.vercel.app/',
    external: true,
  },
];

function Project() {
  return (
    <section id="project">
      <div className="project">
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Selected work and live demos</p>
        </div>
        <div className="project-cards">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-card-overlay">
                <h4>{project.title}</h4>
                {project.external ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live demo <i className="fa-solid fa-arrow-right-long" />
                  </a>
                ) : (
                  <span className="project-card-tag">Current site</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
