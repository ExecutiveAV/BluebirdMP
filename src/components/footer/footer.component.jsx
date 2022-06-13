import React from 'react';

import banner from '../../assets/images/bbmp.png'

import { Link } from 'react-router-dom';

import './footer.styles.scss'

const Footer = () => {
    return (
        <section className='footer' >
            <Link className='footer__logo' to="/" >
                <img className='footer__logo__src' src={banner} alt='' />
            </Link>
            <section className='footer__links' >
                <a href='tel: +15616998609' className='footer__links__link' >561-699-8609</a>
                <span className='footer__links__link separator' >/</span>
                <a href='mailto: jill@bluebirdmp.com' className='footer__links__link' >jill@bluebirdmp.com</a>
                <span className='footer__links__link separator' >/</span>
                <a href='www.bluebirdmp.com' className='footer__links__link' >www.bluebirdmp.com</a>
                <span className='footer__links__link separator' >/</span>
                <a href='tel: +15616998609' className='footer__links__link' >1714 Costa del Sol Blvd, Boca Raton, FL 33432</a>
            </section>
            <section className='sutdio__footer__social-media' ></section>
        </section>
    );
};

export default Footer;