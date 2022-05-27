import React, { useEffect, useState } from 'react';

import quote from '../../asset/quote.svg'
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))




    }, [])

    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className='text-3xl '>What Our Beloved Customers Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}>

                    </Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;