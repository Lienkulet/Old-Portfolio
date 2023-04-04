import React from 'react';
import { urlFor } from '@/lib/client';
import Image from 'next/image';

const Language = ({ technology: { image, name } }) => {
  //  console.log(typeof(urlFor(technology.image)))
  return (
    <div className="technology">
      {/* {typeof (urlFor(image)) != undefined ? console.log(name) : console.log(' nu ' + name)} */}
      <Image
       src={urlFor(image).url()} 
       alt={name}
       width={125}
       height={125}
       className='technology-image' />
      <h4>{name}</h4>
    </div>
  )
}

export default Language;