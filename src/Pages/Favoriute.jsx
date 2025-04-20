import React, { useEffect, useState } from 'react';
import { getDatalocalStorage, removeDataLocalStorage } from '../utils/Index';
import PhonCart from '../components/PhonCart/PhonCart';
import Emptyfeild from '../components/ui/Emptyfeild';

 

const Favoriute = () => {
        const [displayPhon, setdisplayPhon] = useState([]);

        useEffect(()=>{
           setdisplayPhon(getDatalocalStorage())
        },[])

        const handleDelete = id =>{
            removeDataLocalStorage(id)
            setdisplayPhon(getDatalocalStorage())
        }
        if(displayPhon.length <1) return <Emptyfeild></Emptyfeild>
    return (
        <div className='py-8'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto '>

        {
            displayPhon.map(phone=><PhonCart phone={phone} key={phone.id} deletable={true} handleDelete={handleDelete}></PhonCart>)
        }
        </div>

    </div>
    );
   
};

export default Favoriute;