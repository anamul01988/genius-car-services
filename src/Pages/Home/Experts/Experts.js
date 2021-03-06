import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'

import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        {id: 1, name: 'Anamul', img: expert1},
        {id: 2, name: 'Akramul', img: expert2},
        {id: 3, name: 'Rakibul', img: expert3},
        {id: 4, name: 'Nazrul', img: expert4},
        {id: 5, name: 'Shahinur', img: expert5},
        {id: 6, name: 'rabbi', img: expert6}
    ]
    return (
        <div className='container '>
            <h2 className='text-primary text-center mt-4 mb-3 fs-2'>Our experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;