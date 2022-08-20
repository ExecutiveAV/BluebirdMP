import React from 'react';
import './review.styles.scss';

import Header from '../header/header.component';
import ReviewBody from './reviewBody/reviewBody.component';
import ReviewFooter from './reviewFooter/reviewFooter.component';
import Indexer from './indexer/indexer.component';

const Review = ({ title, body, footer, rating, next, prev, jumpTo }) => {

    return (
        <section className='review' >
             <Header content="TESTIMONIALS" />
             <img className='review__image' alt='' src='https://picsum.photos/400/300' />
             <ReviewBody title={title} >
                {body}
             </ReviewBody>
             <ReviewFooter footer={footer} rating={rating} />
             <Indexer nextArrow={next} prevArrow={prev} jumpTo={jumpTo} />
        </section>
    );
};

export default Review;