import React, { useEffect, useState } from 'react';
import UpcomingProductDetails from './UpcomingProductDetails';

const UpcominProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {


        fetch('upcomingProducts.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })

    }, [])
    return (
        <div className='my-6 '>
            <div className='text-center my-8'>
                <h3 className='text-secondary text-2xl font-bold uppercase'>Our Tools</h3>
                <h2 className='text-5xl'>Upcoming Product</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <UpcomingProductDetails
                        key={product._id}
                        product={product}>

                    </UpcomingProductDetails>)
                }
            </div>


        </div>
    );
};

export default UpcominProducts;