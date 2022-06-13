import React from 'react';

import image from '../../assets/images/aboutme2.png';
import studiolights from '../../assets/images/studiolights.png'
import { ReactComponent as InstagramLofo } from '../../assets/images/svg/instagramLogo.svg';

import './contactus.style.scss';

const Contactus = () => {
    return (
        <section className="contactus" >
            <section className='contactus__banner' >
                <img className='contactus__banner__src' alt='Jill & Adam Katz' src={image} />
                <section className='contactus__banner__socialmedia' >
                    <InstagramLofo className='contactus__banner__socialmedia__ig' />
                    <section className='contactus__banner__socialmedia__text' >
                        <p className='contactus__banner__socialmedia__text__prelude' >Follow us on Instagram</p>
                        <p className='contactus__banner__socialmedia__text__handler' >@bluebirdmediastudio</p>
                    </section>
                </section>
            </section>

            <section className='contactus__content' >
                <p className='contactus__content__title' >CONTACT US</p>
                <section className='contactus__content__info' >
                    <p className='contactus__content__info__text'>Email: <a className='bold' href='mailto:jilly@bluebirdmp.com'>jilly@bluebirdmp.com</a></p>
                    <p className='contactus__content__info__text'>or call <a className='bold' href='tel:+15616998609' >(561) 699 - 8609</a> for all bookings/inquiries.</p>
                </section>
                <section className='contactus__content__address' >
                    <img className='contactus__content__address__logo' src={studiolights} alr="Studio Lights" />
                    <section  className='contactus__content__address__text' >
                        <p className='contactus__content__address__text__line' >Studio Address:</p>
                        <p className='contactus__content__address__text__line' >1714 Costa del Sol Blvd</p>
                        <p className='contactus__content__address__text__line'>Boca Raton, Fl 33432</p>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Contactus;