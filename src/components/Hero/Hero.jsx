import React from 'react';
import heroImage from '../../assets/banner.png';
const Hero = () => {
    return (
        <div>
          <img className='w-full md:max-w-xl mx-auto' src={heroImage} alt="" />
        </div>
    );
};

export default Hero;