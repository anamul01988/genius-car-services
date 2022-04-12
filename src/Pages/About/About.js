import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>Click the Link</h3>
            <button onClick={()=>navigate('/shipment')}>Proceed shipping </button>
        </div>
    );
};

export default About;