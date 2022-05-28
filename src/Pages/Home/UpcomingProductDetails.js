import React from 'react';

const UpcomingProductDetails = ({ product }) => {
    const { name, image, description, price, manufacturerName } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl  m-auto">
            <figure className="px-10 pt-10">
                <img src={image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="italic text-2xl font-bold">{name}</h2>
                <p className='text-justify'>{description}</p>

                <p><span className='text-xl text-bold font-bold text-red-500'>Price:</span> <span className='italic'> {price} BDT/unit</span>  </p>

                <p><span className='text-xl text-bold font-bold text-red-500'>Manufacturer Company :</span> <span className='italic'> {manufacturerName}</span></p>

            </div>
        </div>
    );
};

export default UpcomingProductDetails;