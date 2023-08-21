import React from 'react';
import { Link } from 'react-scroll';

const Guide = () => {
  return (
    <div name='guide' className='flex flex-col md:items-center max-w-screen-lg mx-auto pt-14'>
      <div className="text-3xl text-[#FF4985] font-semibold px-2">
        Guide
      </div>
      <div className="text-xl text-[#79E6F3] font-semibold px-2 pb-2">
        How to use this App?
      </div>
      <div className="text-white p-2">
        <h3 className='text-[#79E6F3] font-medium text-lg pt-4'>For Sending Messages</h3>
        <ul>
          <li><span className='text-[#FF4985] font-medium'>Format</span>:<span className='rounded-lg bg-[#1C1F28] p-1 text-sm ml-2 font-mono'>say "MESSAGE" to "RECEIVERS_NAME" </span>  </li>
          <li className='pt-1'>If <span className='font-mono text-slate-300'>"RECEIVERS_NAME"</span>  does not exist in database, you've to add his/her number (You can use any name/nickname)</li>
          <li className='pt-2'><span className='text-[#FF4985] font-medium'>Format to save ph.number</span>: Country code should be mentioned(+91 is set by default). There should not be any space between the phone number.</li>
        </ul>
        <h3 className='text-[#79E6F3] font-medium text-lg pt-4'>For playing song</h3>
        <ul>
          <li><span className='text-[#FF4985] font-medium'>Format</span>:<span className='rounded-lg bg-[#1C1F28] p-1 text-sm ml-2 font-mono'>"..." play "TRACK_NAME".</span> </li>
        </ul>
        <h3 className='text-[#79E6F3] font-medium text-lg pt-4'>For google maps</h3>
        <ul>
          <li><span className='text-[#FF4985] font-medium'>Format</span>:<span className='rounded-lg bg-[#1C1F28] p-1 text-sm ml-2 font-mono'>"..." where is "LOCATION".</span> </li>
        </ul>
        <h3 className='text-[#79E6F3] font-medium text-lg pt-4'>Closing current app</h3>
        <ul>
          <li><span className='text-[#FF4985] font-medium'>Format</span>:<span className='rounded-lg bg-[#1C1F28] p-1 text-sm ml-2 font-mono'>"..." close this "..."</span></li>
        </ul>
        <h3 className='text-[#79E6F3] font-medium text-lg pt-4'>Closing an app by name</h3>
        <ul>
          <li><span className='text-[#FF4985] font-medium'>Format</span>:<span className='rounded-lg bg-[#1C1F28] p-1 text-sm ml-2 font-mono'>"..." close "APP_NAME" "..."</span></li>
        </ul>
        <h3 className='text-[#79E6F3] font-medium text-lg pt-4'>Open any app</h3>
        <ul>
          <li><span className='text-[#FF4985] font-medium'>Format</span>:<span className='rounded-lg bg-[#1C1F28] p-1 text-sm ml-2 font-mono'>"..." open/run/use "APP_NAME" "..."</span></li>
        </ul>
        <h3 className='text-[#FF4985] font-semibold text-lg pt-4'>*Every other format will go for GPT</h3>
        <h4 className='pt-2'><Link to='contact' smooth duration={500} className='cursor-pointer text-indigo-300 border-b-2 border-indigo-300'>Reach out to me</Link> for any improvements/suggestions.</h4>
      </div>
    </div>
  )
}

export default Guide
