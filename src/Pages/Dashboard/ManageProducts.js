import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://obscure-spire-95539.herokuapp.com/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }

    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <h2 className='text-2xl text-center text-red-500 mb-8 mt-8'>All product: {products.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avatar</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow

                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct}

                            >

                            </ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && (
                <DeleteModal
                    deleteProduct={deleteProduct}
                    refetch={refetch}
                    setDeleteProduct={setDeleteProduct}
                ></DeleteModal>
            )}
        </div>
    );
};

export default ManageProducts;