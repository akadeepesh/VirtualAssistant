import React, { useState } from 'react';
import { BsFillMicFill } from 'react-icons/bs';

const Home = () => {
    const [mic, setMic] = useState(false);
    const [inputCommand, setInputCommand] = useState("");
    const [receivedOutput, setReceivedOutput] = useState("");

    const handleInputChange = (event) => {
        setInputCommand(event.target.value);
    };

    const toggleMic = async () => {
        try {
            const csrfToken = getCookie('csrftoken');
            setMic(!mic);
            let requestBody = {};
            requestBody = JSON.stringify({ command: inputCommand });
            const response = await fetch('/api/process_command/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
            });

            if (response.ok) {
                setMic(mic);
                const responseData = await response.json();
                setInputCommand(responseData.command);
                setReceivedOutput(responseData.Output);
            }
        } catch (error) {
            console.error('Error_Toggle:', error);
        }
    }

    const handleGetResponse = async () => {
        try {
            const csrfToken = getCookie('csrftoken');
            const response = await fetch('/api/process_command/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify({ command: inputCommand })
            });

            if (response.ok) {
                const responseData = await response.json();
                setReceivedOutput(responseData.Output);
            }
            
        } catch (error) {
            console.error('Error_GR:', error);
        }
    };
    
    function getCookie(name) {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
    }

    return (
        <div name='home' className='max-w-screen-xl flex flex-col justify-center items-center mx-auto pt-10'>

            <div className="text-center mx-4">

                <div className='text-5xl p-4 font-semibold text-[#FF4985]'>
                    Hey there!
                </div>

                <div className='text-lg font-medium text-[#79E6F3]'>
                    Click on the <span className='bg-[#1C1F28] bg-opacity-70 px-2 rounded-md text-white'>mic button</span>  in order to speak.
                </div>

                <div className="font-medium text-white mt-4">
                    ...or you can type as well
                </div>

            </div>

            <div className="mt-16 text-center relative">

                <div className={`absolute bg-gradient-to-tr from-sky-500 to-cyan-500 ${mic? "-inset-1.5" : "inset-0"} rounded-full duration-300`}></div>

                <div className="relative rounded-full bg-gradient-to-tr from-red-500 to-purple-400 cursor-pointer drop-shadow-md" onClick={toggleMic}>
                    <BsFillMicFill size={90} className={`p-3  ${mic? "text-cyan-500" : "text-cyan-800"} duration-300`} />
                </div>
            </div>

            <div className="pt-8 px-2 w-full max-w-screen-sm">
                <div className="text-[#79E6F3] font-medium">Input:</div>
                <textarea className='bg-[#1C1F28] rounded-lg text-white p-2 w-full resize-none h-16 focus:outline-none' placeholder='How can I help you Today?' value={inputCommand} onChange={handleInputChange}></textarea>
                <div className="py-2 px-5 rounded-lg bg-cyan-400 hover:bg-cyan-500 duration-200 inline-block text-center font-medium mb-8 cursor-pointer" onClick={handleGetResponse}>
                    Get response
                </div>
                <div className="text-[#79E6F3] font-medium mt-2">Output:</div>
                <textarea className='bg-slate-900 rounded-lg text-white resize-none p-2 w-full h-40 focus:outline-none focus:caret-transparent' placeholder='Give some input in order to get some output.' value={receivedOutput} readOnly></textarea>
            </div>

        </div>
    )
}

export default Home
