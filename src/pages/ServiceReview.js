import React from 'react';

const ServiceReview = ({review}) => {
    const { name, reviews, photo, serviceName } = review;

    return (
        <div className='shadow-lg block  w-3/5 px-3 py-10 my-3 text-center'>
            <h1> Name {name}</h1>
            <h4>{serviceName}</h4>
            <figure >
                <img src={photo} className='w-1/2 rounded-md mx-auto' alt="" />
            </figure>
            <p> Review {reviews}</p>
            
        </div>
    );
};

export default ServiceReview;