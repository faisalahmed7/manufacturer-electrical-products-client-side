import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div className='my-16'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 text-xl">Do You Want To See UpComing Products, Click On the Button</p>
                        <Link to='/products'><button className="btn btn-primary">SEE ALL</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GetStarted;