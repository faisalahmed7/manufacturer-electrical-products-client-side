import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L4KNgLkOaRwZwQozaKI13c9tEv6CHeHWNlmvOX3y1v7319JdcyLKvd7mw333Y06biM6UJFerSJuOghpISROFpij00VuWPLtpQ');


const Payment = () => {
    const { id } = useParams();
    const url = `https://obscure-spire-95539.herokuapp.com/order/${id}`;

    const { data: payOrder, isLoading } = useQuery(['orderNew', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success text-2xl font-semibold">Hello, {payOrder.clientName}</p>
                    <h2 className="card-title">Please Pay for {payOrder.product}</h2>
                    <p>Your Order: </p>
                    <p>Please pay: ${payOrder.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payOrder={payOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;