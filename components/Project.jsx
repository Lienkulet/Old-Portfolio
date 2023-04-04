import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/client'
import { AiFillGithub } from 'react-icons/ai';
import { SiLivewire } from 'react-icons/si';
import { UsedTechnology } from '.';

const Project = ({ project  }) => {
    const { image, name, slug, github, liveDemo, details, technologies } = project;
    return (
        <div className='project'>
            <div className="image">
                <div className="page">
                    <Image
                        src={urlFor(image).url()}
                        alt={name}
                        width={250}
                        height={350}
                        className="project-image"
                    />
                </div>
                <div className="links">
                   
                        <Link href={github}  target='_blank'>
                            <AiFillGithub size='2rem' className='icon' />
                        </Link>
    
                        <Link href={liveDemo} className="live-demo" target='_blank'>
                            Live
                        </Link>
                </div>
            </div>
            <div className="description">
                <div className='details'>
                    <h2>{name}</h2>
                    <p>{details}</p>
                </div>
                <div className="usedTechnologies">
                    {technologies?.map((technology) => <UsedTechnology key={technology._id} technology={technology}  />)}
                </div>
            </div>
        </div>
    )
}

export default Project