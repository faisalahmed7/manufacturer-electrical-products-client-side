import React from 'react';
import useProducts from '../../hooks/useProducts';
import SingleProductDetails from './SingleProductDetails';

const Products = () => {

    const [products] = useProducts()
    const newProducts = [...products]
    const finalProducts = newProducts.slice(-6)



    return (
        <div className='my-6 '>
            <hr />
            <div className='text-center my-8'>
                <h3 className='text-orange-500 text-5xl font-bold uppercase mb-4'>Our Tools</h3>
                <h2 className='text-5xl'>Tools We Are Manufacturing</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    finalProducts.map(product => <SingleProductDetails
                        key={product._id}
                        product={product}>

                    </SingleProductDetails>)
                }
            </div>

        </div>
    );
};

export default Products;