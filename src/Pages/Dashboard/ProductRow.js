import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch }) => {

    const handleDelete = id => {
        fetch(`https://obscure-spire-95539.herokuapp.com/product/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    toast.success(`${product.name}, is deleted`)
                    refetch()
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={product.image} alt={product.name} />
                </div>
            </div></td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td><button onClick={() => handleDelete(product._id)} className="btn btn-xs btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default ProductRow;