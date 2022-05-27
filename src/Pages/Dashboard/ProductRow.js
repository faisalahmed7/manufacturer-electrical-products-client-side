import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch }) => {

    const handleDelete = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${product.name}, is deleted`)
                    refetch()
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={product.image} alt={product.name} />
                </div>
            </div></td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td><button onClick={() => handleDelete(product._id)} class="btn btn-xs btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default ProductRow;