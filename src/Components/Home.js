import React from 'react'
import { hamma, hamma2, homeImage } from '../assets'
import { AppText } from '../constants'
import Typewriter from 'typewriter-effect';
import './Home.css'

const Home = () => {
  return (
    <div className='mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row'>
      <div>
      <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>
      <h1 className='text-[40px] font-bold'>{AppText.Iam} </h1> 
      <Typewriter
  options={{  
    strings: [AppText.RahulSanap, AppText.FrontedDeveloper,AppText.UIUXDesigner,AppText.BackendDeveloper],
    autoStart: true,
    loop: true,
  }}
/>
    
      <h1 className='text-gray-400 mt-4'>{AppText.aboutMeDescripion}</h1>
      <button className='hover:z-50 transition-all duration-300 ease-in-out bg-purple-600 mt-4 p-2 px-3 transition-all ease-in-out hover:scale-110 text-white rounded-md'>Resume</button>
      </div>
      
      <img src={hamma2} className=' mt-4 w-[300px] md:w-[400px]' />

    </div>
  )
}

export default Home