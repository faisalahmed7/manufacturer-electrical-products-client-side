import React from 'react';

const SingleProductDetails = ({ product }) => {
    const { name, image, description, quantity, price } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-4 m-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{description}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;