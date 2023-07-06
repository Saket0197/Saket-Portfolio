import React from 'react';
import {allIcons} from '../data';
import blob from '../Assets/UserAsset/blobVector.png';

export default function TechStack() {
  return (
    <section className='tech-stack-section' id='Stack'>
      <h1 className='section-heading'>Tech Stack</h1>

      <div className='stack-info-container'>
        <div className='info intro-desc'>
          <h2>ME & My Tech Stack</h2>
          <p>My name is Saket Sharma, I am a MERN Stack Web Developer. I have total work experience of 2.5 years in various domains. I have been developing various projects, the links of which are provided in the portfolio. I currently have hands-on knowledge of <span className='tech-stacks'>HTML, CSS, JS, ReactJS, Redux toolkit, TailwindCSS, ExpressJS, MongoDB with Mongoose ODM, Git, Github and Postman for API testing</span>. Going forward, I am willing to seek career opportunities in this domain as I am keen to learn and work on the latest technologies and frameworks through my work experience so as to contribute for the organization that I would be part of and also to expand my tech stack further.</p>
        </div>
  
        <div className='info stack-icons'>
            <div className='blob-container'>
              <img src={blob} alt='blob' className='blob'/>
            </div>
            {
              allIcons.map((icon,index) => {
                return <img src={icon} key={index} alt='stackIcon' className='stack-icon'/>
              })
            }
        </div>
      </div>

    </section>
  )
}
