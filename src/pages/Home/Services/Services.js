import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        
       <div className=' py-16 bg-gray-100'  id='services'>
           <h1 className='text-4xl text-gray-800 font-extrabold' >Services</h1>
            <div className='services-container'>

            {
            services.map(service=><Service
             key={service.id}
             service={service}>

            </Service>)}
       </div>
       </div>
    );
};

export default Services;