import React from 'react';
import './stars.styles.scss';

import Star from './star/star.component';

const Stars = ( { rating } ) => {
    
    const rateStars = (rating) => {
        const tempStars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                tempStars.push(<Star rated />)
            } else {
                tempStars.push(<Star />);
            }
        }
        return tempStars;
    }

    const ratedStars = rateStars(rating);

    return (
        <section className='stars' >
            {ratedStars}
        </section>
    );
};

export default Stars;