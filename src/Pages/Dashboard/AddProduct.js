import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddProduct = () => {

    const [user] = useAuthState(auth)



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


        fetch('https://obscure-spire-95539.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Doctor is added successfully');
                    e.target.reset();
                }
                else {
                    toast.error('Failed to add a doctor')
                }
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
                                <input type="text" name="name" placeholder='Product Name' required className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="text" name="manufacturerName" placeholder='Manufacturer Name' required className='input input-bordered w-full max-w-xs mb-2 ' />
                                <input type="text" name="quantity" placeholder='Total Quantity' required className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="text" name="minQuantity" placeholder='Minimum Order Quantity' required className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="text" name="price" placeholder='Price Per Unit' required className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="text" name="description" placeholder='Product Description' required className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="text" name="image" placeholder='Product Image' required className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="email" name="email" value={user.email} className='input input-bordered w-full max-w-xs mb-2' />
                                <input type="submit" value="Add Product" className='input input-bordered btn btn-primary w-full max-w-xs mb-2' />
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;