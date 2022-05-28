import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`https://obscure-spire-95539.herokuapp.com/order?client=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {


                    setOrders(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2>orders: {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.clientName}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>

                                        </div>}
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;