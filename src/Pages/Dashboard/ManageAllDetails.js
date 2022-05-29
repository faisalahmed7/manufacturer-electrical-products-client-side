import React from 'react';
import { toast } from 'react-toastify';


const ManageAllDetails = ({ order, refetch, index, setDeleteOrder }) => {
    const { product, client, paid, _id, quantity } = order;
    const handleDelete = id => {
        fetch(`https://obscure-spire-95539.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    toast.success(`${order.product}, is deleted`)
                    refetch()
                }

            })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product}</td>

            <td>{client}</td>
            <td>{quantity}</td>
            <td>
                {!paid && (
                    <label
                        onClick={() => setDeleteOrder(order)}
                        for="delete-modal"
                        class="btn btn-xs btn-error"
                    >
                        Delete
                    </label>
                )}
                {paid && (
                    <div className="font-bold">

                        <p>
                            <span className="text-success">Paid</span>
                        </p>
                    </div>
                )}
            </td>
        </tr>
    );
};


export default ManageAllDetails;