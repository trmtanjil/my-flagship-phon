import React, { useState } from 'react';
 
import heroImage from '../../assets/banner.png';
import Button from '../ui/button';
const Hero = ({handleSearch}) => {
  const [search , setSearch] = useState('')
    return (
        <div>
          <img className='w-full md:max-w-xl mx-auto' src={heroImage} alt="" />

          <div className='text-center space-y-4'>
            <h1 className='font-thin text-7xl text-gray-900'>Browse, Search, view, buy</h1>
          </div>
          <form
          onSubmit={e=> {
            handleSearch(e,search);
            setSearch(' ')
          }}
          className='flex md:flex-row flex-col justify-center items-center pt-6'>
            <input
            type='text'
           
            value={search}
            onChange={e=>setSearch(e.target.value)}

            placeholder='Search Phone by Name'
            className='bg-white border border-gray-300 rounded-md shadow-md w-2/3 px-4 mb-4 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0 py-3'
            />
         <Button label='Search' type='submit'></Button>   
          </form>
        </div>
    );
};

export default Hero;