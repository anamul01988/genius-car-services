import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {name, img, description, price }= service;
    return (
        <div className='service shadow rouded '> 
            <img className='w-100 ' src={img} alt="img" />
            <h3 className='fs-5 pt-3'> {name}</h3>
            <h5 className='text-dark'>Price: {price}</h5>
            <p><small>{description}</small></p>
            <button className='btn btn-warning w-100'>Book For: {name}</button>
        </div>
    );
};

export default Service;