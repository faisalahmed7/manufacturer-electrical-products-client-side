import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const handleAddNewReview = e => {
        e.preventDefault()
        const review = {
            name: e.target.name.value,
            location: e.target.location.value,
            img: e.target.img.value,
            review: e.target.review.value,


        }


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review is added successfully');
                    e.target.reset();
                }
                else {
                    toast.error('Failed to add a review')
                }
            })

    }
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h2 className='text-center text-purple-500 text-2xl mb-4'>Please Add A Review</h2>
                <div className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center font-bold text-xl">Add Review</h2>
                            <form onSubmit={handleAddNewReview}>
                                <input type="text" name="name" placeholder='Your Name' required className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="text" name="location" placeholder='Your Location' required className='input input-bordered w-full max-w-xs mb-2 ' />
                                <input type="text" name="img" placeholder='Your Image Link' className='input input-bordered w-full max-w-xs mb-2' />
                                <textarea className='textarea w-full max-w-xs mb-2  textarea-bordered' name='review' placeholder='Write Something' rows={4}></textarea>
                                <input type="submit" value="Add" className='input input-bordered btn btn-primary w-full max-w-xs mb-2' />
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddReview;