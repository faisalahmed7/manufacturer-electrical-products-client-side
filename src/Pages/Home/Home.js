import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessDetails from './BusinessDetails';
import Certificate from './Certificate';
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
            <Certificate></Certificate>
            <Footer></Footer>
        </div>
    );
};

export default Home;