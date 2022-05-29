import React from 'react';

const SingleCertificate = ({ certificate }) => {
    const { image } = certificate;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Certificate" className="rounded-xl" />
            </figure>

        </div>
    );
};

export default SingleCertificate;