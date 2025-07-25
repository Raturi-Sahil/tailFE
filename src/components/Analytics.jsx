import React from 'react'
import laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      {/**mx-auto center this div insdie the parent div horizontally, place-items-center is used to center correctly both horizontally and vertically inside grid layout. */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-5 place-items-center'>

          <img src={laptop} alt="/" />

          <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mange Data Analytics Centrally</h1>
              <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui nam minima quas deleniti, unde quae tenetur doloribus. Nesciunt quia vero ducimus a necessitatibus rem dolore aliquam nobis, iusto tenetur asperiores, officia, hic similique illo possimus sint facilis unde enim esse aspernatur tempora ab nostrum beatae? Assumenda sed perferendis ad.</p>
              
                <button className='bg-black md:w-[170px] w-[120px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 text-[#00df9a]'>Get Started</button>
              
          </div>

      </div>

    </div>
  )
}

export default Analytics