import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { openMenu, closeMenu } from '../../redux/menu/menu.slice';

import { NavLink } from 'react-router-dom';

import './menu.styles.scss';

const Menu = () => {

    //Redux
    const isMenuOpen = useSelector(state => state.isMenuOpen.isMenuOpen);

    const dispatch = useDispatch();

    const menuHandler = () => {
        isMenuOpen ? dispatch(closeMenu()) : dispatch(openMenu());
    }

    return (
        <section className={`menu ${isMenuOpen ? "" : "hidden"}`} >
            <NavLink onClick={e => e.preventDefault()} to='/photography/portfolio' className='menu__link' >
                <NavLink onClick={menuHandler} to="portfolio/portraits" >Portfolio</NavLink>
                <nav className='container' >
                    <NavLink onClick={menuHandler} to="portfolio/portraits"  className='container__sublink' >Portraits</NavLink>
                    <NavLink onClick={menuHandler} to="portfolio/babyphotos"  className='container__sublink' >Baby Photos</NavLink>
                    <NavLink onClick={menuHandler} to="portfolio/landscape"  className='container__sublink' >Landscape</NavLink>
                </nav>
            </NavLink>
            <NavLink onClick={menuHandler} to='/photography/aboutme' className='menu__link' >About</NavLink>
            <NavLink onClick={menuHandler} to='/photography/booking' className='menu__link' >Bookings</NavLink>
            <NavLink onClick={menuHandler} to='/photography/testimonials' className='menu__link' >Testimonials</NavLink>
            <NavLink onClick={menuHandler} to='/photography/contactus' className='menu__link' >Contact Us</NavLink>
        </section>
    );
};

export default Menu;