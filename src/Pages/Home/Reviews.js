import React from 'react';


import useReviews from '../../hooks/useReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews] = useReviews()
    const newReviews = [...reviews]
    const reverseReviews = newReviews.reverse()

    return (
        <section className='my-20'>

            <div className='text-center mb-8'>
                <h4 className="text-3xl text-pink-500 font-semibold">Reviews</h4>
                <h2 className='text-3xl '>What Our Beloved Customers Says</h2>
            </div>


            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reverseReviews.map(review => <Review
                        key={review._id}
                        review={review}>

                    </Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;