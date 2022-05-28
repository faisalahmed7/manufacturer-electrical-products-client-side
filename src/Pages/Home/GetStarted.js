import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div><hr />
            <h2 className='text-5xl text-center mt-10 mb-8'>Upcoming Products</h2>
            <div className='my-16'>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5 text-xl">Do You Want To See the UpComing Products, Click On the Button</p>
                            <Link to='/upcomingProducts'><button className="btn btn-primary">SEE ALL</button></Link>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default GetStarted;