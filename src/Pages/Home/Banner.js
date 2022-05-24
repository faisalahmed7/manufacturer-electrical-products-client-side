import React from 'react';
import banner from '../../asset/banner.jpg'
import bg from '../../asset/bg.jpg'



const Banner = () => {


    return (
        <div
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}

            className="hero min-h-screen rounded-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Electrical Tools</h1>
                    <p className="py-4 text-justify">Electrical tools are tools used to work on an electrical system. These can include a wide range of tools such as wire and cable cutters, wire strippers, coaxial compression tools, telephony tools, wire cutter/strippers, cable tie tools, accessories, and even more. We all know that the right tool can make all the difference when it comes to completing a project. They make the difference between done and done right. The bottom line is, the better the tool, the better the outcome. We are manufacturing the best brand electrical tools in the industry at the best prices.</p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;