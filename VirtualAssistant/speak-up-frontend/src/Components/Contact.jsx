import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="mt-8 pt-6 bg-[#FF4985] bg-opacity-20 rounded-t-2xl">

      <div name='contact' className='flex flex-col md:items-center max-w-screen-lg mx-auto pb-6'>

        <div className="text-3xl text-[#FF4985] font-semibold px-4">
          Contact
        </div>
        <div className="text-xl text-[#79E6F3] font-semibold px-4 pb-2">
          Get in touch.
        </div>

        <div className="flex flex-col w-full md:flex-row mt-4">

          <div className="md:w-1/2 mx-4">

            <form action="https://getform.io/f/42ec5113-ce63-4e62-a62f-6f09f6c7eca1" method="POST" className='flex mx-auto flex-col p-2 bg-[#79E6F3] bg-opacity-80 rounded-lg'>

              <label htmlFor="Name" className='font-semibold pt-2 pl-6'>Name</label>
              <input required name='Name' className="rounded-lg mx-5 bg-[#1C1F28] text-white p-2 focus:outline-none" placeholder='Your good name please' />

              <label htmlFor="Email" className='font-semibold pt-2 pl-6'>Email</label>
              <input type='email' required name='Email' className="rounded-lg mx-5 bg-[#1C1F28] text-white p-2 focus:outline-none" placeholder='So that I can get back to you' />

              <label htmlFor="Message" className='font-semibold pt-2 pl-6'>Message</label>
              <textarea name='Message' required className="rounded-lg resize-none mb-2 h-32 bg-[#1C1F28] text-white mx-5 p-2 focus:outline-none" placeholder='What do you want to talk about?' />

              <button className='bg-[#FF4985] rounded-lg inline-block mx-auto px-6 py-1 font-semibold hover:bg-opacity-80 duration-300 text-lg'>
                Let's talk
              </button>

            </form>

          </div>

          <div className="md:w-1/2 mx-4 mt-10 md:mt-2">

            <div className="text-xl text-[#79E6F3] font-semibold border-b-2 border-[#79E6F3] w-2/3">
              Links
            </div>

            <div className="flex mx-auto">

              <a href="https://github.com/akadeepesh" target='_blank' rel="noreferrer" className="">
                <AiFillGithub size={50} className='my-2 mr-2 text-[#FF4985] hover:text-[#79E6F3] duration-300' />
              </a>
              <a href="https://www.linkedin.com/in/deepesh-kumar-b884b022b/" target='_blank' rel="noreferrer" className="">
                <AiFillLinkedin size={50} className='my-2 mr-2 text-[#79E6F3] hover:text-[#FF4985] duration-300' />
              </a>
              <a href="/" target='_blank' rel="noreferrer" className="">
                <BsFillPersonLinesFill size={50} className='my-2 mr-2 text-[#FF4985] hover:text-[#79E6F3] duration-300' />
              </a>
              <a href="mailto:deepesh.kumar.ug21@nsut.ac.in" target='_blank' rel="noreferrer" className="">
                <MdOutlineEmail size={50} className='my-2 mr-2 text-[#79E6F3] hover:text-[#FF4985] duration-300' />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="text-center py-4 border-t-2 border-gray-500 mx-4 text-slate-300">
        Copyright &#169;2023 Speak Up. - A project by Deepesh Kumar
      </div>

    </div>

  )
}

export default Contact
