import React from 'react';
import banner from '../../asset/banner.jpg'




const Banner = () => {


    return (
        <div className="hero min-h-screen bg-lime-200 mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img className=' w-96 rounded-2xl' src={banner} alt='' />
                <div className='lg:ml-16'>

                    <p className="py-6 text-justify text-xl text-black">Electrical tools are tools used to work on an electrical system. These can include a wide range of tools such as wire and cable cutters, wire strippers, coaxial compression tools, telephony tools, wire cutter/strippers, cable tie tools, accessories, and even more. We all know that the right tool can make all the difference when it comes to completing a project. They make the difference between done and done right. The bottom line is, the better the tool, the better the outcome. We are manufacturing the best brand electrical tools in the industry at the best prices.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;