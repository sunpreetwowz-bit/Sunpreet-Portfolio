import React from 'react';
import './Project.css';

const projects = [
  {
    id: 'scheduleparlor',
    title: 'Schedule Parlor',
    image: '/project-images/scheduleparlor.png',
    link: 'https://www.scheduleparlor.com/',
    tags: ['Laravel', 'Business'],
  },
  {
    id: 'tagoretheater',
    title: 'Tagore Theater Chandigarh',
    image: '/project-images/tagoretheater.png',
    link: 'https://tagoretheatrechd.org/all/tagore/',
    tags: ['Codeigniter', 'Portal'],
  },
  {
    id: 'brittainchiro',
    title: 'Brittain Chiropractic Center',
    image: '/project-images/brittainchiropractor.png',
    link: 'https://www.brittianchiropracticcenter.com/',
    tags: ['WordPress', 'Healthcare'],
  },
  {
    id: 'dewdrops',
    title: 'The Dew Drop Kasauli',
    image: '/project-images/thedewdrops.png',
    link: 'https://thedewdropskasauli.com/',
    tags: ['WordPress', 'Hospitality'],
  },
  {
    id: 'universalfloormats',
    title: 'Universal Floor Mats',
    image: '/project-images/universalfloormats.png',
    link: 'https://www.universalfloormats.com/',
    tags: ['eCommerce', 'WooCommerce'],
  },
  {
    id: 'ushomeinspector',
    title: 'US Home Inspector Training',
    image: '/project-images/ushomeinspectortraining.png',
    link: 'https://ushomeinspectortraining.com/',
    tags: ['WordPress', 'Education'],
  },
  {
    id: 'jazelrepairs',
    title: 'Jazel Repairs',
    image: '/project-images/jazelrepair.png',
    link: 'https://www.jazelrepairs.com/',
    tags: ['WordPress', 'Services'],
  },
  {
    id: 'driverg',
    title: 'Driver G',
    image: '/project-images/driverg.png',
    link: 'https://driverg.com/',
    tags: ['Laravel', 'Platform'],
  },
  {
    id: 'abhushanohio',
    title: 'Abhushan Ohio',
    image: '/project-images/abhushanohio.png',
    link: 'https://www.abhushanohio.com/',
    tags: ['PHP','eCommerce', 'Retail'],
  },
  {
    id: 'hillside',
    title: 'Hill Side Breeze',
    image: '/project-images/hillside.png',
    link: 'https://hillsidebreezekasauli.com/',
    tags: ['WordPress', 'Hospitality'],
  },
  {
    id: 'talumnibiz',
    title: 'Talumni Biz',
    image: '/project-images/talumnibiz.png',
    link: 'http://www.talumnibiz.com/',
    tags: ['WordPress', 'Business'],
  },
  {
    id: 'weather',
    title: 'Weather Application',
    image: 'https://repository-images.githubusercontent.com/200318206/978d6f00-88dd-11ea-8727-1449bd91edc6',
    link: 'https://react-weather-app-github-io.vercel.app/',
    tags: ['React', 'API'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Shopping',
    image: 'https://www.builderfly.com/wp-content/uploads/2020/05/What-are-ways-to-promote-a-clothing-e-Commerce-website-min.jpg',
    link: 'https://apparels-github-io.vercel.app/',
    tags: ['React', 'eCommerce'],
  },
  {
    id: 'calculator',
    title: 'Calculator Application',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPtL6zMy8b-Ee7tGhjCdKX7U04vdpRllESobZ3j0MYQ&s',
    link: 'https://react-calculator-nine-flame.vercel.app/',
    tags: ['React', 'JavaScript'],
  },
];

function Project() {
  return (
    <section id="project">
      <div className="project">
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of live websites and applications built for clients worldwide
          </p>
        </div>
        <div className="project-cards">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 80}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-card-body">
                <h4>{project.title}</h4>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card-link"
                >
                  View live site <i className="fa-solid fa-arrow-right-long" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
