import React from 'react';
import Stars from '../stars/stars.component';
import './reviewFooter.styles.scss';

const ReviewFooter = ( { footer, rating } ) => {
    return (
        <section className='reviewFooter' >
            <p className='reviewFooter__footer' >- {footer}</p>
            <Stars rating={rating} />
        </section>
    );
};

export default ReviewFooter;