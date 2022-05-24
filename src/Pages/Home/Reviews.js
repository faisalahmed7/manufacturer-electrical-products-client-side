import React from 'react';
import people1 from '../../asset/images/people1.jpg'
import people2 from '../../asset/images/people2.jpg'
import people3 from '../../asset/images/people3.jpg'
import people4 from '../../asset/images/people4.jpg'
import people5 from '../../asset/images/people5.jpg'
import people6 from '../../asset/images/people6.jpg'
import quote from '../../asset/quote.svg'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Henry Nicholes',
            review: 'There are very much about the product shipping. Like it very much.',
            location: 'California',
            img: people1,
            rating: 4.5
        },
        {
            _id: 2,
            name: 'Sara Nicholes',
            review: 'Quality Of their are good as displayed on the screen. Keep it up.',
            location: 'Washington DC',
            img: people2,
            rating: 4
        },
        {
            _id: 3,
            name: 'Zara Nicholes',
            review: 'Smooth website to search my desired products',
            location: 'San-Francisco',
            img: people3,
            rating: 3.5
        },
        {
            _id: 4,
            name: 'Zara Nicholes',
            review: 'Smooth website to search my desired products',
            location: 'San-Francisco',
            img: people4,
            rating: 3.5
        },
        {
            _id: 5,
            name: 'Zara Nicholes',
            review: 'Smooth website to search my desired products',
            location: 'San-Francisco',
            img: people5,
            rating: 3.5
        },
        {
            _id: 6,
            name: 'Zara Nicholes',
            review: 'Smooth website to search my desired products',
            location: 'San-Francisco',
            img: people6,
            rating: 3.5
        },

    ]

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