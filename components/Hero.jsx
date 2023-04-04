import React from 'react';
import Link  from 'next/link';
import { BsArrowRight } from 'react-icons//bs';


const Hero = () => {
  return (
    <section id='Hero' >
      <div className='Container'>
      <h4>Hi, my name is</h4>
      <h2>Clocicov Alexandru</h2>
      <h3>I`m a Full-Stack Developer.</h3>
      <p>I`m a full-stack developer specializing in building (and occasionally designing)
         exceptional <br /> digital experiences. Currently I`m focused on building responsive
         full-stack web applications</p>
      <Link href='#work'>
        <button type='button' className='view_work row'>
          <span>View Work</span>
          <BsArrowRight />
        </button>
      </Link>
      </div>
    </section>
  )
}

export default Hero