import React from 'react';
import { Project } from '.';


const Work = ({ projects }) => {

  return (
    <section  className='Container' id='work'>
      <div className="header">
        <h3>MY WORK</h3>
        <h1>Projects.</h1>
        <p>
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos.
          It reflects my ability to solve complex problems, work with different technologies, and
          manage projects effectively.
        </p>
      </div>
      <div className='projects'>
       
       {projects?.map((project) =>  <Project key={project.slug} project={project} /> )}

      </div>
    </section >
  )
};

export default Work;