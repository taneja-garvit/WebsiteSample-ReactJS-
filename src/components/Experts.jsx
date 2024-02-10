import React from 'react'

const Experts = () => {
  return (
    <div className='  bg- m-auto p-4 md:p-24 max-w-screen-lg'>
    <div className='flex flex-col md:flex-row md:w-[1150px] space-y-4 md:space-y-0 md:space-x-24 w-full'>
        <div className='flex justify-center md:justify-start'>
            <img className= 'inline w-56 md:w-96' src='src\image\Bitcoin.jpg' alt='heyy' />
        </div>
        <div className='flex flex-col justify-center w-full md:h-56'>
            <h1 className='text-yellow-400 font-bold text-[30px] text-center md:text-left'>Learn From Experts</h1>
            <p className='font-bold text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sint iure facilis vel perferendis officia autem, hic, reprehenderit id voluptatem dolore? Quae sit qui ipsam ad ab animi fuga accusantium, assumenda quis doloremque, deleniti dolorum.</p>
            <button className='bg-yellow-400 mt-4 p-2 w-36 text-white hover:bg-slate-800 rounded-[8px] mx-auto md:mx-0'>Get Started</button>
        </div>
    </div>
</div>

  )
}

export default Experts
