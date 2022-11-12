import React from 'react';

const Service = ({service}) => {
    const {id ,name,details,icon} =service;

    return (
        <div className=' shadow-xl rounded-lg px-6 py-6 text-center '>
            <figure className=''>
                <img className='mx-auto' src={icon} alt="" />
            </figure>
            <h4 className='text-xl font-semibold mt-8 mb-2'>{name}</h4>
            <p>{details}</p>
        </div>
    );
};

export default Service;