import React, { useEffect } from 'react';
import './photography.style.scss'

import Aboutme from '../../pages/aboutme/aboutme.page';
import Booking from '../../pages/booking/booking.page';
import Testimonials from '../../pages/testimonials/testimonials.page';
import Portfolio from '../portfolio/portfolio.page';
import Contactus from '../contactus/contactus.pages';

import Banner from '../../components/banner/banner.component';
import Menu from '../../components/menu/menu.components';
import Footer from '../../components/footer/footer.component';
import FullView from '../portfolio/fullView/fullView.page';

import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../redux/menu/menu.slice';
import { updateWindowWidth } from '../../redux/windowWidth/windowWidth.slice';



import { Routes, Route } from 'react-router-dom';

function useWindowSize(dispatch) {

    useEffect(() => {

        function handleResize() {
            dispatch(updateWindowWidth(window.innerWidth))
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
}



const Photography = () => {

    const windowWidth = useSelector(state => state.windowWidth.windowWidth);

    const dispatch = useDispatch();
    //listens for window resize event and updates windowWidth in Redux Store
    useWindowSize(dispatch, windowWidth);

    if (windowWidth >= 768) {
        dispatch(closeMenu())
    }

    return (
        <section className="studio"  >
            <Banner />  
            <section className='studio__pages' >
                <Menu  />
                <section className='studio__pages__content' >
                    <section className='studio__pages__content__container' >
                        <Routes >
                            <Route exact path='/portfolio/:category' element={<Portfolio />} />
                            <Route exact path='aboutme' element={<Aboutme />} />
                            <Route exact path='booking' element={<Booking />} />
                            <Route exact path='testimonials' element={<Testimonials />} />
                            <Route exact path='contactus' element={<Contactus />} />
                            <Route exact path='portfolio/:category/:image' element={<FullView />} />
                        </Routes>
                    </section>
                    <Footer />
                </section>
            </section>
        </section>
    );
};

export default Photography;