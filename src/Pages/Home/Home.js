import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessDetails from './BusinessDetails';

import Extra from './Extra';
import GetStarted from './GetStarted';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <GetStarted></GetStarted>

            <BusinessDetails></BusinessDetails>

            <Reviews></Reviews>
            <Extra></Extra>
            <Footer></Footer>
        </div>
    );
};

export default Home;