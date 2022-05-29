import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth);




    const { _id, name, price, quantity } = product;


    useEffect(() => {
        const url = `https://obscure-spire-95539.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json()
                .then(data => setProduct(data)))
    }, [])

    let minimumQuantity = 200;


    const handleBuyNow = e => {
        e.preventDefault();
        let inputQuantity = e.target.quantity.value;


        const order = {
            productId: _id,
            product: name,
            clientName: user.displayName,
            client: user.email,
            price,
            quantity: inputQuantity,
            address: e.target.address.value,
            phone: e.target.phone.value,
        };
        if (inputQuantity < minimumQuantity) {
            toast.error(`Minimum Order 200 pcs`);
            e.target.reset();
        }
        else if (quantity < inputQuantity) {
            toast.error(`Maximum  Order not more than available quantity`);
            e.target.reset();
        }

        else {
            fetch("https://obscure-spire-95539.herokuapp.com/order", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(order),
            })
                .then((res) => res.json())
                .then((data) => {

                    toast.success("Your order placed successfully");
                    e.target.reset();


                });

        }




    }




    return (
        <div className='lg:justify-center lg:items-center lg:flex gap-16 mx-auto' >
            <div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img src={product.image} className='w-60' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-rose-500 text-3xl">{product.name}</h2>

                        <p className='text-justify'>{product.description}</p>
                        <p><span className='text-xl text-bold font-bold text-red-500'>Available Quantity:</span> {product.quantity}</p>
                        <p><span className='text-xl text-bold font-bold text-red-500'>Price:</span> {product.price} BDT/unit </p>
                        <p><span className='text-xl text-bold font-bold text-red-500'>Minimum Order Quantity:</span> {product.minQuantity}</p>
                    </div>

                </div>
            </div>


            <div>
                <div className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center font-bold text-xl">Buy Product</h2>
                            <form onSubmit={handleBuyNow}>
                                <input
                                    type="text"
                                    name="product"
                                    readOnly
                                    disabled
                                    value={product?.name}
                                    className="input mb-2  input-bordered w-full max-w-xs"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    className="input mb-2  input-bordered w-full max-w-xs"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    readOnly
                                    disabled
                                    value={user?.email || ""}
                                    className="input mb-2  input-bordered w-full max-w-xs"
                                />
                                <input
                                    type="text"
                                    name="availableQuantity"
                                    readOnly
                                    disabled
                                    value={product?.quantity}
                                    className="input mb-2  input-bordered w-full max-w-xs"
                                />
                                <input
                                    required
                                    type="text"
                                    name="address"
                                    placeholder="Your Address"
                                    className="input mb-2 input-bordered w-full max-w-xs"
                                />
                                <input
                                    required
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="input mb-2 input-bordered w-full max-w-xs"
                                />
                                <input
                                    required
                                    type="number"
                                    name="quantity"
                                    placeholder=" Your Order Quantity"
                                    className="input mb-2 input-bordered w-full max-w-xs"
                                />

                                <input
                                    type="submit"
                                    value="Buy Now"
                                    className="btn btn-primary mb-2 w-full max-w-xs"
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default Purchase;