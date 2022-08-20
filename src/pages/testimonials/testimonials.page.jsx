import React, { useState } from 'react';
import Review from '../../components/review/review.component';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './testimonials.style.scss';

import { Carousel } from 'react-responsive-carousel';

const reviewTextBody = "Shooting with Jill was one of the best experiences I’ve had with a photographer! She’s really sweet and made us all feel so comfortable. She captured exactly what I was looking for and I couldn’t be happier with the photographs she took of our family. I plan on doing all of my shoots with her in the future!"

const arrowPrev = () => {
    return (<p>{`<`}</p>);
}

const Testimonials = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const next = () => {
        if (currentImageIndex !== 2) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        };
    };

    const prev = () => {
        if (currentImageIndex !== 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(2)
        }
    };

    const jumpTo = (index) => {
        setCurrentImageIndex(index);
    }

    return (
        <section className="testimonials" >
            <Carousel selectedItem={currentImageIndex} swipeable={false} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} >
                <Review prev={prev} next={next} jumpTo={jumpTo} footer="John Doe / Family Photoshoot" rating={4} title="FEELS LIKE HOME! " body={reviewTextBody} />
                <Review prev={prev} next={next} jumpTo={jumpTo} footer="John Doe / Family Photoshoot" rating={4} title="FEELS LIKE HOME! " body={reviewTextBody} />
                <Review prev={prev} next={next} jumpTo={jumpTo} footer="John Doe / Family Photoshoot" rating={4} title="FEELS LIKE HOME! " body={reviewTextBody} />
            </Carousel>
        </section>
    );
};

export default Testimonials;