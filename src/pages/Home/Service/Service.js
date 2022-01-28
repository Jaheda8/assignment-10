import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
const {name, id, department, img, description}=service;
    return (
        <div className='service ' id='service'>
          <img className='pb-3' src={img} alt="" />
          <h3  className='text-2xl font-semibold'>{name}</h3>
          <h5 className='text-1xl font-semibold'>Department: {department}</h5>
          <p>{description}</p>
       <Link to={`/service/${id}`}> 
       <button class="bg-gray-800 hover:bg-blue-800 text-white font-bold py-2 px-7 mt-5 border-b-4 border-gray-700 hover:border-gray-500 rounded">
  Details
</button>
      </Link>
        </div>
    );
};

export default Service;