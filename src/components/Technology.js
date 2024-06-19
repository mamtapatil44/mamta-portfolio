import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { RiAngularjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { RiHtml5Line } from 'react-icons/ri'
import { RiBootstrapLine } from 'react-icons/ri'
import { RiCss3Line } from 'react-icons/ri'
import { RiTailwindCssLine } from 'react-icons/ri'

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-4xl text-center'>Technologies</h1>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine  className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiJavascriptLine className='text-7xl text-yellow-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiAngularjsLine className='text-7xl text-red-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-500'/>
            </div>
           
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiBootstrapLine  className='text-7xl text-purple-400'/>
            </div>
         
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiTailwindCssLine className='text-7xl text-cyan-400'/>
            </div>
           
           
        </div>
    </div>
  )
}

export default Technology