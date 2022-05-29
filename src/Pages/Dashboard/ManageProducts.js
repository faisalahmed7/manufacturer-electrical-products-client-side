import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {
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
                            <th>Product</th>
                            <th>Buyer</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow

                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}

                            >

                            </ProductRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageProducts;