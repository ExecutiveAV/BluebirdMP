import React from 'react';
import './homepage.style.scss';

import logo from '../../assets/images/bbmp.png'

import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <section className="homepage">
            <img className="homepage__title" src={`${logo}?nocache=${Math.random()}`} alt='Logo' />
            <section className="homepage__subtitles">
                <Link to="/production" className="homepage__subtitles__subtitle">P R O D U C T I O N</Link>
                <p className="homepage__subtitles__subtitle-separator">/</p>
                <Link to="/photography/portfolio/portraits" className="homepage__subtitles__subtitle">P H O T O G R A P H Y</Link>
            </section>
        </section>
    );
};

export default Homepage;