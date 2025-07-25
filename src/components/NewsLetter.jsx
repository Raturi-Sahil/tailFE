import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full text-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>

            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>

                <p>Sign up to our newsletter and stay up to date.</p>
            </div>

            <div className='my-4'>
               <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" placeholder='Enter your email' className='bg-white rounded-md p-2 w-full text-black '/>

                    <button className='bg-[#00df9a] md:w-[170px] w-[120px] rounded-md font-medium ml-4 my-6 py-3 md:py-2 text-black'>Notify me</button>
               </div>
               <p>We care about the protection of your data. Read our <span className='underline text-[#00df9a]'><a href="/">Privacy Policy</a></span></p>
            </div>

            
              
        </div>
    </div>
  )
}

export default NewsLetter