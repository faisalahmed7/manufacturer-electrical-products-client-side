import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProductDetails = ({ product }) => {
    const { name, image, description, quantity, price, _id, minQuantity } = product;
    const navigate = useNavigate()

    const navigateToDetail = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-4 m-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{description}</p>
                <p>Available Quantity: {quantity}</p>
                <p>Price: {price} BDT/unit </p>
                <p>Minimum Order Quantity: {minQuantity}</p>
                <div className="card-actions">
                    <button onClick={() => navigateToDetail(_id)} className="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;