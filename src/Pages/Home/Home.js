import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessDetails from './BusinessDetails';
import Countdown from './Countdown';
import GetStarted from './GetStarted';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <GetStarted></GetStarted>
            <Countdown></Countdown>
            <BusinessDetails></BusinessDetails>

            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;