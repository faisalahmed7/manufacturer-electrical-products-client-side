import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteOrder from './DeleteOrder';
import ManageAllDetails from './ManageAllDetails';

const ManageallOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const { data: allOrders, isLoading, refetch } = useQuery('products', () => fetch('https://obscure-spire-95539.herokuapp.com/order', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }

    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <h2 className='text-2xl text-center text-red-500 mb-8 mt-8'>All Orders: {allOrders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>

                            <th>Product Name</th>
                            <th>Client</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <ManageAllDetails

                                key={order._key}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}

                            >

                            </ManageAllDetails>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && (
                <DeleteOrder
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                ></DeleteOrder>
            )}
        </div>
    );
};

export default ManageallOrders;