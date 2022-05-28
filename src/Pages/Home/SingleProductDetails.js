import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProductDetails = ({ product }) => {
    const { name, image, description, quantity, price, _id, minQuantity, manufacturerName } = product;
    const navigate = useNavigate()

    const navigateToDetail = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl  m-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt="product" className="rounded-xl w-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="italic text-3xl font-bold">{name}</h2>
                <p className='text-justify'>{description}</p>
                <p><span className='text-xl text-bold font-bold text-red-500'>Available Quantity:</span> <span className='italic font-bold'> {quantity} pcs</span></p>
                <p><span className='text-xl text-bold font-bold text-red-500'>Price:</span> <span className='italic font-bold'> ${price} </span>  </p>
                <p><span className='text-xl text-bold font-bold text-red-500'>Minimum Order Quantity:</span> <span className='italic font-bold'> {minQuantity} pcs</span></p>
                <p><span className='text-xl text-bold font-bold text-red-500'>Manufacturer Company :</span> <span className='italic font-bold'> {manufacturerName}</span></p>
                <div className="card-actions">
                    <button onClick={() => navigateToDetail(_id)} className="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;