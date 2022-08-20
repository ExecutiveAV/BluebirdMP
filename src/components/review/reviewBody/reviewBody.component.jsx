import React from 'react';
import './reviewBody.styles.scss';

const ReviewBody = ({ title, children }) => {
    return (
        <section className='reviewBody' >
            <p className='reviewBody__title' >{title}</p>
            <p className='reviewBody__body' >{children}</p>
        </section>
    );
};

export default ReviewBody;