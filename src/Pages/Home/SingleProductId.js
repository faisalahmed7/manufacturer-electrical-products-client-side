import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductId = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json()
                .then(data => setProduct(data)))
    }, [])
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={product.image} className='w-60' alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{product.name}</h2>

                <p className='text-justify'>{product.description}</p>
                <p>Available Quantity: {product.quantity}</p>
                <p>Price: {product.price} BDT/unit</p>
                <p>Minimum Order Quantity: {product.minQuantity}</p>
            </div>

        </div>
    );
};

export default SingleProductId;