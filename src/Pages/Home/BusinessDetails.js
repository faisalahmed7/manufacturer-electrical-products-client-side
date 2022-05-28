import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const BusinessDetails = () => {
    return (
        <div className='mt-8'>
            <h2 className='mt-4 mb-8 text-4xl font-bold text-red-500 text-center'>Last Month Business Summary</h2>
            <div className=" lg:stats-horizontal md:stats-vertical xs:stats-vertical shadow ">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value text-primary">1300+</div>
                    <div className="stat-desc">21% more than March</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className="stat-title">Website Views</div>
                    <div className="stat-value text-secondary">200K</div>
                    <div className="stat-desc">5% more than March</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Shipping done Today</div>
                    <div className="stat-desc text-black">190+ shippings Pending</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessDetails;