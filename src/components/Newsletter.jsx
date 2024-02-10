import React, { useState } from 'react';

const Newsletter = () => {
  const [mail, setMail] = useState('');

  const onsubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setMail(event.target[0].value);
  };
  return (
    <div className='bg-purple-400 h-[600px] md:h-[400px]'>
      <div className='ml-0 w-full h-64 flex flex-col p-2 md:flex-row md:m-24 space-x-96 justify-center md:justify-start'>
      <div className='flex flex-col md:flex-row md:space-x-96 justify-center items-center md:items-start'>
  <div className='font-bold mt-20 text-center md:text-left'>
    <h1 className='text-[15px] md:text-[30px] text-white'>Want to Learn Latest IT skills!!?</h1> 
    <p className='text-white'>Register to our newsletter and stay up to date</p>
  </div>
  <div className='mt-20 flex flex-col  justify-center items-center md:items-start'>
    <form onSubmit={onsubmit} className="flex  md:flex-row items-center md:items-start">
      <input className='h-8 w-56 border' type='email' placeholder='Enter a mail'/>
      <button type="submit" className='bg-gray-600 mt-0 ml-4 p-1 w-20 text-white hover:bg-slate-800 rounded-[4px] border-none'>Submit</button>
    </form>
    <p className='text-white mt-3'>T&C Apply</p>
    {mail && <p className='font-bold mt-4'>{`Your response is saved with ${mail} id`}</p>}
  </div>
</div>


      </div>
    </div>
  );
  
}

export default Newsletter;
