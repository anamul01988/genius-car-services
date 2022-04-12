import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <div className="container-full bg-dark mt-4 py-3">
            <div className='text-center text-light fs-5'>
            <p><small>Copyright © {year}</small></p>
        </div>
      </div>
    );
};

export default Footer;