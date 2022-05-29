import React, { useEffect, useState } from 'react';
import SingleCertificate from './SingleCertificate';

const Certificate = () => {

    const [certificates, setCertificates] = useState([])

    useEffect(() => {


        fetch('awards.json')
            .then(res => res.json())
            .then(data => setCertificates(data))




    }, [])
    return (
        <div className='mt-10 mb-10'>
            <hr />
            <h2 className='text-center text-5xl text-semibold text-orange-500 mb-6 mt-8'>Our Certificates</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    certificates.map(certificate => <SingleCertificate
                        key={certificate._id}
                        certificate={certificate}>

                    </SingleCertificate>)
                }
            </div>
        </div>
    );
};

export default Certificate;