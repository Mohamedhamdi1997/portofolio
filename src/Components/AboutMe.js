import React from 'react'
import { AppText, aboutSection } from '../constants'
import { laptop, wave, wave1 } from '../assets'

const AboutMe = () => {
  return (
    <div className='mt-36'>
      <img src={wave} className='w-screen absolute' />
      <img src={laptop} className='absolute mt-[-130px] md:mt-[-180px] w-[220px] md:w-[300px]'/>
    <div className='h-[300px] pt-7 bg-purple-600 w-full'>
      <h2 className='text-[50px] text-center pt-6 font-bold text-white'>About 
      <sapn className='text-black'> Me</sapn></h2>
      <h2 className='text-white mt-10 text-center px-10 md:px-64 lg:px-80'>{AppText.aboutMeDescripion}</h2>
    </div>

    <div className='flex flex-col mt-[-60px] md:flex-row justify-around items-center px-32'>
      {
        aboutSection.map((item,index)=>(
          <div className='group hover:bg-purple-600 mb-5 p-7 rounded-2xl'>
            <img src={item.image} className="w-[230px] h-[190px] object-cover rounded-lg"/>
           <div className='w-[230px] pb-[20px]'>
           <h2 className='font-bold text-center group-hover:text-white'>{item.title}</h2>
            <h2 className='text-[12px] text-center text-gray-500 group-hover:text-gray-200'>{item.desc}</h2>
           </div>
          </div>
        ))
      }

    </div>

    </div>
  )
}

export default AboutMe