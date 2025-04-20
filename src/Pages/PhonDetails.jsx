import React from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';

const PhonDetails = () => {
    const data = useLoaderData()
    const {id}= useParams()
    const singlPhones = data.find(phone=>phone.id===parseInt(id))
 
    const {
        name,
        image,
        model,
        price,
        description,
        storage,
        camera_info,
    } = singlPhones || {};
 
    return (
        <div className='py-12 w-full'>
               <img className='w-full md:w-auto mx-auto' src={image} alt="" />

               <div className='flex justify-between'>
                <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                <div>
                    button
                </div>
               </div>
        </div>
    );
};

export default PhonDetails;