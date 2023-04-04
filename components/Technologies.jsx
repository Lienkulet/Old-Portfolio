import React from 'react';
import { Language } from '.';

const Technologies = ({ technologies }) => {
    return (
    <section  className='Container' id='skills'>
    <div className='header'>
    <h3>My Skills</h3>
    <h1>Technologies.</h1>
    </div>
    <div className='Technologies'>

      {technologies?.map((technologyy) => <Language key={technologyy._id} technology={technologyy} />)}

    </div>
  </section >
  )
};

export default Technologies;
