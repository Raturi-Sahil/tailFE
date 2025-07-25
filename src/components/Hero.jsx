import React from 'react'
import {ReactTyped} from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
        <div className='w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a]'>GROW WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
            <div className='flex justify-center items-center py-4'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for</p>
                <ReactTyped 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={[
                    "BTB", "BTC", "SASS"
                    ]}
                    typeSpeed = {120}
                    backSpeed = {140}
                    loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms</p>
            <button className='bg-[#00df9a] md:w-[200px] w-[120px] rounded-md font-medium my-6 mx-auto py-3 text-white-100'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero