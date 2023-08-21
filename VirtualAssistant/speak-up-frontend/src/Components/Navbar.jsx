import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <nav className='flex bg-[#1C1F28] h-14 text-white opacity-90 justify-around items-center sticky top-0 z-10'>

            <div className="text-xl font-bold cursor-pointer hover:text-red-400 duration-200">
                <a href='/'>Speak Up.</a>
            </div>

            <ul className='hidden md:flex'>
                <li className="pl-12 cursor-pointer hover:text-red-400 duration-200">
                    <Link to='home' smooth duration={500}>Home</Link>
                </li>
                <li className="pl-12 cursor-pointer hover:text-red-400 duration-200">
                    <Link to='guide' smooth duration={500}>Guide</Link>
                </li>
                <li className="pl-12 cursor-pointer hover:text-red-400 duration-200">
                    <Link to='about' smooth duration={500}>About</Link>
                </li>
                <li className="pl-12 cursor-pointer hover:text-red-400 duration-200">
                    <Link to='contact' smooth duration={500}>Contact</Link>
                </li>
            </ul>

            <div className="md:hidden" onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            <ul className={`${nav ? "transalte-y-10" : "-translate-y-64"} duration-200 flex-col absolute bg-[#1C1F28] rounded-b-xl text-center ites justify-center right-0 top-12 md:hidden`}>
                <li className="py-4 cursor-pointer" >
                    <Link to='home' smooth duration={500} onClick={() => setNav(!nav)}className='px-12'>Home</Link>
                </li>
                <li className="py-4 cursor-pointer" >
                    <Link to='guide' smooth duration={500} onClick={() => setNav(!nav)}className='px-12'>Guide</Link>
                </li>
                <li className="py-4 cursor-pointer">
                    <Link to='about' smooth duration={500} onClick={() => setNav(!nav)} className='px-12'>About</Link>
                </li>
                <li className="py-4 cursor-pointer" >
                    <Link to='contact' smooth duration={500} onClick={() => setNav(!nav)} className='px-12'>Contact</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
