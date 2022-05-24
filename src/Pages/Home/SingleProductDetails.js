import React from 'react';

const SingleProductDetails = ({ product }) => {
    const { name, image, description, quantity, price } = product;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-4 m-auto">
            <figure class="px-10 pt-10">
                <img src={image} alt="product" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-justify'>{description}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;