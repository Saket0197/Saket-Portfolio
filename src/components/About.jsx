import React, { useEffect } from 'react'
import Typed from 'typed.js';
import circle from '../Assets/UserAsset/circle.png';
import cube from '../Assets/UserAsset/cube.png'
import dots from '../Assets/UserAsset/dots.png'
import plus from '../Assets/UserAsset/plus.png';
import zigzags from '../Assets/UserAsset/zigzags.png';
import gif from '../Assets/UserAsset/profile.gif';

export default function About() {

    useEffect(()=>{
        const typed = new Typed('.run-text',
            {
                strings: ["a Software Engineer.", "a Web Developer.", "a Full-Stack Developer.", "keen to grow my career in MERN Stack domain."],
                loop: true,
                typeSpeed: 70,
                backSpeed: 70,
                backDelay: 700
            }
        ); 
        return () => {
            typed.destroy();
        }
    },[]);

  return (
    <section className='hero-section' id='About'>

        <div className='description' >
            
            <div className='profile-link-content'>
                <p>Hello, This is Saket</p>
                <div className='my-profile'>
                    <a href='https://github.com/Saket0197' target='_blank' rel='noreferrer' className='github-link'>GITHUB - Click here
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>

            <p className='typed'>I am <span className='run-text'></span></p>

            <p>
                I’m a software developer and this is my personal portfolio. Here I would like to share some of my key projects, with their github repo and live links and my tech stack as a software developer. I also have more projects hosted on github on the above link provided.
            </p>
        </div>

        <div className='gif-container'>
            <img src={circle} alt='' className='icons circle'/>
            <img src={cube} alt='' className='icons cube'/>
            <img src={dots} alt='' className='icons dots'/>
            <img src={plus} alt='' className='icons plus'/>
            <img src={zigzags} alt='' className='icons zigzags'/>
            <img src={gif} alt='MyImage' className='my-gif'/>
        </div>
        
    </section>
  )
}
