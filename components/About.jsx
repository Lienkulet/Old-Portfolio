import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section  className='About' id='about'>
      <div className='Container'>
      <div className='header'>
        <h3>INTRODUCTION</h3>
        <h1>Overview.</h1>
        <p>
        As a full-stack developer, I'm comfortable working with both frontend and backend technologies
        with popular frameworks like React, Angular, and NextJs and I have a strong foundation in database management 
        with systems like MongoDB and MySQL. 
        I'm a quick learner and collaborate closely with clients to create efficient,
        scalable and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
        </p>
        <Link href="#contact" >
        <button className='hire_now'>Hire now</button>
      </Link>
      </div>
      <div className='container'>
        <div className='tilt-box-wrap'>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <div className='tilt-box'>
            <div className='tilt-rainbow'>

              <strong>Software <br /> Developer</strong>
            </div>
          </div>
        </div>

        <div className='tilt-box-wrap'>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <div className='tilt-box'>
            <div className='tilt-rainbow'>
              <strong>Web <br /> Developer</strong>
            </div>
          </div>
        </div>

        <div className='tilt-box-wrap'>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <span className='t_over'></span>
          <div className='tilt-box'>
            <div className='tilt-rainbow'>
              <strong>Full-stack <br /> Developer</strong>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About;