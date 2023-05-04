import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/client'
import { AiFillGithub } from 'react-icons/ai';

const Project = ({ project }) => {
    // const { image, name, slug, github, liveDemo, details, Technologies } = project;

    return (
        <div key={project._id} className='project'>
            <div className="image">
                <div className="page">
                    <Image
                        src={urlFor(project.image).url().toString()}
                        alt={project.name}
                        width={250}
                        height={350}
                        className="project-image"
                    />
                </div>
                <div className="links">

                    <Link href={project.github} target='_blank'>
                        <AiFillGithub size='2rem' className='icon' />
                    </Link>

                    <Link href={project.liveDemo} className="live-demo" target='_blank'>
                            Live
                        </Link>
                </div>
            </div>
            <div className="description">
                <div className='details'>
                        <h2>{project.name}</h2>
                        <p>{project.details}</p>
                </div>
                <div className="usedTechnologies">
                    {project.Technologies?.map((technology, index) =>
                        <h5 key={index}>#{technology.name}</h5>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project