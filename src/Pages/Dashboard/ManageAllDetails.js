import React from 'react';
import { toast } from 'react-toastify';


const ManageAllDetails = ({ order, refetch, index }) => {
    const handleDelete = id => {
        fetch(`https://obscure-spire-95539.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${order.product}, is deleted`)
                    refetch()
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>

            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td><button onClick={() => handleDelete(order._id)} class="btn btn-xs btn-error text-white">Delete</button></td>
        </tr>
    );
};


export default ManageAllDetails;