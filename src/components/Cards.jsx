import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h1 className='text-2xl font-bold text-center py-8'>Single user</h1>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div>
                    <p className='py-2 border-b mx-8 text-center mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 text-center'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 text-center'>Send up to 2GB</p>
                </div>
                
                <button className='bg-[#00df9a] mx-auto md:w-[170px] w-[120px] rounded-md font-medium my-6 py-3 md:py-2 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
                <h1 className='text-2xl font-bold text-center py-8'>Double user</h1>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div>
                    <p className='py-2 border-b mx-8 text-center mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 text-center'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 text-center'>Send up to 2GB</p>
                </div>
                
                <button className='bg-black mx-auto md:w-[170px] w-[120px] rounded-md font-medium my-6 py-3 md:py-2 text-[#00df9a]'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h1 className='text-2xl font-bold text-center py-8'>Multiple user</h1>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div>
                    <p className='py-2 border-b mx-8 text-center mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 text-center'>1 Granted User</p>
                    <p className='py-2 border-b mx-8 text-center'>Send up to 2GB</p>
                </div>
                
                <button className='bg-[#00df9a] mx-auto md:w-[170px] w-[120px] rounded-md font-medium my-6 py-3 md:py-2 text-black'>Start Trial</button>
            </div>
            
        </div>
    </div>
  )
}

export default Cards