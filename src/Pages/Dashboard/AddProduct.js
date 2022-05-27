import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { data: products, isLoading } = useQuery('newProduct', () => fetch(`http://localhost:5000/product`).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAddNewProduct = e => {
        e.preventDefault()
        const product = {
            name: e.target.name.value,
            manufacturerName: e.target.manufacturerName.value,
            quantity: e.target.quantity.value,
            minQuantity: e.target.minQuantity.value,
            price: e.target.price.value,
            description: e.target.description.value,
            image: e.target.image.value,
            email: e.target.email.value,

        }


        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log('Product', inserted);
                e.target.reset();
            })

    }
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h2 className='text-center text-blue-400 text-2xl mb-4'>Add A New Product</h2>
                <div className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center font-bold text-xl">Add Product</h2>
                            <form onSubmit={handleAddNewProduct}>
                                <input type="text" name="name" placeholder='Product Name' className='input input-bordered w-full max-w-xs' />
                                <input type="text" name="manufacturerName" placeholder='Manufacturer Name' className='input input-bordered w-full max-w-xs ' />
                                <input type="text" name="quantity" placeholder='Total Quantity' className='input input-bordered w-full max-w-xs' />
                                <input type="text" name="minQuantity" placeholder='Minimum Order Quantity' className='input input-bordered w-full max-w-xs' />
                                <input type="text" name="price" placeholder='Price Per Unit' className='input input-bordered w-full max-w-xs' />
                                <input type="text" name="description" placeholder='Product Description' className='input input-bordered w-full max-w-xs' />
                                <input type="text" name="image" placeholder='Product Image' className='input input-bordered w-full max-w-xs' />
                                <input type="email" name="email" placeholder='Your Email' className='input input-bordered w-full max-w-xs' />
                                <input type="submit" value="Add Product" className='input input-bordered btn btn-primary w-full max-w-xs' />
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;