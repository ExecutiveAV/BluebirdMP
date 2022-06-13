import React from 'react';

import banner from '../../assets/images/bbmp.png'

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { openMenu, closeMenu } from '../../redux/menu/menu.slice';

import './banner.styles.scss';

const Banner = () => {

    const isMenuOpen = useSelector(state => state.isMenuOpen.isMenuOpen);

    const dispatch = useDispatch();

    const menuHandler = () => {
        isMenuOpen ? dispatch(closeMenu()) : dispatch(openMenu());
    }

    return (
        <section className='banner' >
            <section className={`menu-clicker ${isMenuOpen ? "open" : ""}`} onClick={menuHandler} />
            <div className={`banner__menu-container ${isMenuOpen ? "change" : ""}`} onClick={menuHandler}>
                <div className="banner__menu-container__bar1"></div>
                <div className="banner__menu-container__bar2"></div>
                <div className="banner__menu-container__bar3"></div>
                <div className="banner__menu-container__bar2"></div>
            </div>
            <Link className='banner__logo' to='/' >
                <img className='banner__logo__src' src={banner} alt="" />
            </Link>
            <section className='banner__line' />
        </section>
    );
};

export default Banner;