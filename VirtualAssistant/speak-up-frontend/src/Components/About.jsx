import React from 'react'

const About = () => {
  return (
    <div name='about' className='flex flex-col md:items-center max-w-screen-lg mx-auto pt-14'>
      <div className="text-3xl text-[#FF4985] font-semibold px-2">
        About
      </div>
      <div className="text-xl text-[#79E6F3] font-semibold px-2 pb-2">
        Get to know about this project and myself
      </div>
      <div className="text-white p-2">
        My name is Deepesh Kumar and I am currently pursuing a degree in Mechanical Engineering at Netaji Subhas University of Technology. I am passionate about coding and am constantly seeking new challenges and opportunities to learn and grow. My goal is to use my skills and knowledge to make a positive impact in the world. I have developed this virtual assistant that can perform a variety of tasks, including sending messages through WhatsApp, playing songs on youtube, searching for locations on google map, opening and closing applications of desktop etc. I have integrated the GPT4All model to enable the assistant to answer general queries. This full-stack project uses React.js for the frontend, Django for the backend, and REST API for connecting the two. The result is a powerful and versatile virtual assistant that can help users streamline their daily tasks. Please go through by the Guide to properly use the Assistant.
      </div>
    </div>
  )
}

export default About
