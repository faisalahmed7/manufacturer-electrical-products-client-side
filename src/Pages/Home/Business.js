import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import bg1 from '../../asset/bg1.jpg'

const Business = () => {
    return (
        <div
            style={{
                background: `url(${bg1})`,
                backgroundSize: 'cover'
            }}
            className='my-16 rounded-2xl'>
            <div className='text-center mt-16'>
                <h3 className='text-secondary text-5xl font-bold uppercase py-6'>Millions Business Trust Us</h3>
                <h2 className='text-3xl mb-6 '>Our Business Achievements</h2>
            </div>
            <div className='flex justify-between  text-center lg:mx-4 md:mx-4 sm:mx-2'>
                <div>
                    <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                    <p className='text-3xl mt-4'>72</p>
                    <p className=' text-2xl'>Countries</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon> <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
                    <p className='text-3xl mt-4'>535K+</p>
                    <p className='  text-2xl'>Complete Shipping</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon> <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                    <p className='text-3xl mt-4'>2750+</p>
                    <p className='  text-2xl'>Happy Clients</p>

                </div>
                <div>

                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                    <p className='text-3xl mt-4'>700+</p>
                    <p className='  text-2xl'>FeedBacks</p>
                </div>
            </div>
            <div className='text-center my-8'>

                <label htmlFor="my-modal-6" className="btn btn-primary mb-8">Contact Us</label>


                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Do You Stay On This Pages</h3>

                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Yes</label>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Business;