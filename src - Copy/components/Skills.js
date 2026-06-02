import React from 'react';
import './Skills.css';
//import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  //DiNodejs,
  //DiMongodb,
} from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import {
  SiVisualstudiocode,
  //SiExpress,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiWoo,
  SiMysql,
  SiJquery,
  SiPostman,
  //SiTailwindcss,
  //SiFigma,
  SiGit,
  SiGithub,
  SiCodeigniter
} from 'react-icons/si';

const skills = [
  { icon: <SiPhp />, label: 'PHP' },
  { icon: <SiLaravel />, label: 'Laravel' },
  { icon: <SiCodeigniter />, label: 'CodeIgniter'},
  { icon: <DiReact />, label: 'React' },
  { icon: <SiWordpress />, label: 'WordPress' },
  { icon: <SiWoo />, label: 'WooCommerce' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiPostman />, label: 'REST APIs' },  
  { icon: <DiHtml5 />, label: 'HTML5' },
  { icon: <DiCss3 />, label: 'CSS3' },
  { icon: <DiJavascript1 />, label: 'JavaScript' },
  { icon: <SiJquery />, label: 'jQuery' },
  { icon: <FaBootstrap />, label: 'Bootstrap' },  
  { icon: <SiGit />, label: 'Git' },
  { icon: <SiGithub />, label: 'GitHub' },
  { icon: <SiVisualstudiocode />, label: 'VS Code' },

  /* { icon: <SiFigma />, label: 'Figma' },
  { icon: <CgCPlusPlus />, label: 'C++' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
  { icon: <DiNodejs />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express' },
  { icon: <DiMongodb />, label: 'MongoDB' },  */
];

function Skills() {
  return (
    <section id="skills">
      <div className="skills">
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title">Professional Skills</h2>
          <p className="section-subtitle">
            Front-end, back-end, and CMS technologies I work with
          </p>
          {/* <p className="section-subtitle">Technologies I use to build full-stack applications</p> */}
        </div>
        <div className="skill-cards">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="tech-icons"
              title={skill.label}
              data-aos="fade-up"
              data-aos-delay={index * 40}
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
