import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import Review from './Review';

const ReviewsAll = () => {
    const { user, defandence } = useContext(AuthContext)
    const [reviewall, setReview] = useState([])

    useEffect(() => {
        fetch(`https://photograpy-server-site.vercel.app/reviews?email=${user.email}`, {

        })
            .then(res => {

                return res.json()
            })
            .then(data => {


                setReview(data)

            })
    }, [defandence,user.email])

    console.log(reviewall);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2'>

            {
                reviewall.map(review => <Review key={review._id} review={review}></Review>)
            }

        </div>
    );
};

export default ReviewsAll;