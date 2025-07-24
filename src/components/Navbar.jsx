import React, { useState } from 'react'
import { Menu, X } from "lucide-react"

function Navbar() {
    const [nav, setNav]  = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='md:flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleClick} className='block md:hidden'> 
            {nav? <X size={32}/>: <Menu size={32}/>}
        </div>
        <div className={nav? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-500'>Home</li>
                <li className='p-4 border-b border-gray-500'>Company</li>
                <li className='p-4 border-b border-gray-500'>Resources</li>
                <li className='p-4 border-b border-gray-500'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar