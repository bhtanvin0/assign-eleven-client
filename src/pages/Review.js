import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';

const Review = ({ review }) => {

    const { defandence, setDefance } = useContext(AuthContext)
    console.log(review);
    const { name, reviews, photo, serviceName } = review;
    const handleDelete = (event) => {
        fetch(`https://photograpy-server-site.vercel.app/reviews/${event}`, {
            method: 'DELETE',

        }).then(res => {

            return res.json()
        })
            .then(data => {
                setDefance(!defandence)
                alert('delete successfull')
            })
    }
    return (
        <div className='shadow-lg block  w-3/5 px-3 py-10  text-center'>
            <h1> Name {name}</h1>
            <h4>{serviceName}</h4>
            <figure >
                <img src={photo} className='w-1/2 rounded-md mx-auto' alt="" />
            </figure>
            <p> Review {reviews}</p>
            <button onClick={() => handleDelete(review._id)} className='bg-blue-700  p-2 w-full text-white rounded-md'>Delete</button>
        </div>
    );
};

export default Review;