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
       <button  className="btn-primary">Booked {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;