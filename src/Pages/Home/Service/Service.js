import React from 'react';
import './Service.css';
const Service = ({service}) => {
    const {name, img, description, price }= service;
    return (
        <div className='service'> 
            <img className='w-100' src={img} alt="img" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>BooK: {name}</button>
        </div>
    );
};

export default Service;