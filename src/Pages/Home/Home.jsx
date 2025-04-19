import React from 'react';
import Hero from '../../components/Hero/Hero';
import { useLoaderData } from 'react-router';
import PhoneContainer from '../../components/PhonContainer/PhoneContainer';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <PhoneContainer phones={data}></PhoneContainer>
        </div>
    );
};

export default Home;