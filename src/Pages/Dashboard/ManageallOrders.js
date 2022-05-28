import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllDetails from './ManageAllDetails';

const ManageallOrders = () => {
    const { data: allOrders, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/order', {
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

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>

                            <th>Name</th>
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

                            >

                            </ManageAllDetails>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageallOrders;