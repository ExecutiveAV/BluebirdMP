import React from 'react';

import { Link } from 'react-router-dom'

import './aboutme.style.scss'

import image from '../../assets/images/aboutme2.png';

const Aboutme = () => {
    return (
        <section className='aboutme' >
            <p className='aboutme__title' >THE STUDIO</p>
            <img className='aboutme__image' src={image} alt="Studio lights" />
            <section className='aboutme__content' >
                <p className='aboutme__content__text' >BlueBird MP is a 25+ years family-owned and operated company. The Katz Family, Adam and Jill, have created a legacy in the AV and Photography industry. Jill Katz opened The Studio as a way to provide her clients with an all-occasion professional photography/videography space to create story-telling moments and to provide clients with a white-glove treatment experience they will never forget.</p>
                <section className='aboutme__content__buttons' >
                    <Link to="/photography/booking" className='aboutme__content__buttons__CTA' >BOOK WITH US</Link>
                    <Link to="/photography/contactus" className='aboutme__content__buttons__CTA' >CONTACT US</Link>
                </section>
                
            </section>
        </section>
    );
};

export default Aboutme;