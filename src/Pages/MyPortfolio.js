import React from 'react';
import Footer from './Shared/Footer';

const MyPortfolio = () => {
    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='text-4xl font-bold text-primary mt-8 mb-4'>Md. Faisal Ahmed</h2>
                <h4 className='text-2xl text-red-500 mt-4 mb-4'>Email: faisalahmeddiu@gmail.com</h4>
                <p className='text-xl text-secondary font-bold mt-4 mb-4'>Educational Background: B.Sc in CSE from Daffodil International University</p>
                <div className='mt-4 mb-4'>
                    <p className='text-3xl font-bold'>List Of Technologies</p>
                    <div className='mt-4'>
                        <p className='italic'>HTML</p>
                        <p className='italic'>HTML5</p>
                        <p className='italic'>CSS</p>
                        <p className='italic'>CSS3</p>
                        <p className='italic'>C</p>
                        <p className='italic'>JAVASCRIPT</p>
                        <p className='italic'>REACT</p>
                    </div>
                </div>
                <p>https://online-book-store-faisal.netlify.app/</p>
                <p>https://electronics-products-9f328.web.app/</p>
                <p>https://home-tutor-7ac73.web.app/</p>


            </div>

            <div className='mt-10 sticky bottom-0 '>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyPortfolio;