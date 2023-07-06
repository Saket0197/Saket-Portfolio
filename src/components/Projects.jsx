import React from 'react'
import ProjectCard from './ProjectCard';
import data from '../data';

export default function Projects() {

  return (
    <section className='projects-section' id='Projects'>
       <h1 className='section-heading'>Projects</h1>
       <div>
         {
          data.map((proj) => {
            return <ProjectCard key={proj.id} {...proj}></ProjectCard>
          })
         }
       </div>
    </section>
  )
}
