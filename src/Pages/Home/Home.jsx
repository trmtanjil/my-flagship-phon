import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import { useLoaderData } from 'react-router';
import PhoneContainer from '../../components/PhonContainer/PhoneContainer';

const Home = () => {
    const data = useLoaderData();
    const [phones, setPhones] = useState(data)

    const handleSearch =(e, text) => {
        e.preventDefault()
      const searchPhones = data.filter(
        phone => 
        phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
        )  
        
      setPhones(searchPhones);
    }
    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhoneContainer phones={phones}></PhoneContainer>
        </div>
    );
};

export default Home;