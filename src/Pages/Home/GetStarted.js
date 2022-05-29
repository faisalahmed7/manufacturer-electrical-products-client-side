import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div>
            <hr />
            <h2 className='text-5xl text-center mt-10 mb-8'>Upcoming Products</h2>
            <div className='my-16'>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/qYpDjrK/red-banner-coming-soon-web-element-vector-26929889.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md mt-60">
                            <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
                            <p className="mb-5 text-2xl mt-10">Do You Want To See the Upcoming Products, Click on the Button</p>
                            <Link to='/upcomingProducts'><button className="btn btn-secondary text-black w-48">
                                <span className='text-xl text-white p-2'>SEE ALL</span></button></Link>
                        </div>
                    </div>
                </div>
            </div >
            <hr />
        </div>
    );
};

export default GetStarted;