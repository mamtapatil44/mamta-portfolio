import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-2  text-4xl text-center'>About 
        <span className='text-neutral-500'> Me</span></h1>
        
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className=' flex items-center justify-center'>
                  <img  className="rounded-2xl" src={aboutImg} alt='About'/>
                </div>  
            </div>

            <div className='w-full lg:w-1/2 lg:justify-start'>
                    <div className='flex items-center lg:justify-start'>
                        <p className='my-2 py-6 max-w-xl'>{ABOUT_TEXT}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About