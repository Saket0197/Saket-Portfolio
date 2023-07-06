import React from 'react';

export default function ProjectCard({id,projPath,title,icons,description,github,liveLink}) {

  const cardPosition = id%2===0 ? 'right' : 'left';

  return (
    <div className={`project-card ${cardPosition}`}>
        <div className={`seq ${cardPosition}Seq`}>{id}</div>
        <div>
            <img src={projPath} alt='projectImage' className={`project-images image${id}`}/>
            <div className='image-overlay'></div>
        </div>
        <div className='card-content'>
           <div className='icons-container'>
                <div>STACK USED</div>
                {
                    icons.map((icon,index) => {
                        return <img key={index} src={icon} alt='projectIcons' className='card-icons' />
                    })
                }
           </div>
           <div className='content-container'>
                <p className='project-title'>{title}</p>
                <p className='project-desc'>{description}</p>

                <a href={github} target='_blank' rel='noreferrer' className='github-link'>Project Repo - 
                    <i class="fa-brands fa-github"></i>
                </a>

                <a href={liveLink} target='_blank' rel='noreferrer' className='live-link'>Project Link - 
                    <i class="fa-solid fa-link"></i>
                </a>
           </div>
        </div>
    </div>
  )
}
