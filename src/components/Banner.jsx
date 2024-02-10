import React from 'react'
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className='bg-purple-400 w-full py-100px '>
        <div className='font-bold text-center max-w-[1240px] mx-auto p-24'>
            <div className=' mt-5 text-[15px] md:text-[35px]'>
                Learn With Me
            </div>
            <div className='text-white font-bold text-[45px] md:text-[60px] p-5'>
                Grow With Me
            </div>
            <div className='text-[30px] md:text-[50px] text-white p-3'>
                Learn  <ReactTyped
      strings={[
        "Web Development",
        "BlockChain",
        "With Garvit",
      ]}
      typeSpeed={70}
      backSpeed={10}
      loop={true}
    ></ReactTyped>

            </div>
        </div>

    </div>
  )
}

export default Banner