import React from 'react';
import banner from '../../assets/images/testimonials.png';
import './testimonials.style.scss';

const Testimonials = () => {
    return (
        <section className="testimonials" >
            <section className="testimonials__header" >
                <p className="testimonials__header__title" >CUSTOMER REVIEWS</p>
            </section>

            <section className="testimonials__banner" >
                <img className="testimonials__banner__src" src={banner} alt="Girl in sand mesmerizing."/>
            </section>

            <section className="testimonials__users" >
                <section className="testimonials__users__user" >
                    <p className="testimonials__users__user__text" >Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services. </p>
                    <p className="testimonials__users__user__name" >Alexis Welington, Stylist</p>
                </section>
                <section className="testimonials__users__user" >
                    <p className="testimonials__users__user__text" >Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services. </p>
                    <p className="testimonials__users__user__name" >Alexis Welington, Stylist</p>
                </section>
                <section className="testimonials__users__user" >
                    <p className="testimonials__users__user__text" >Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services. </p>
                    <p className="testimonials__users__user__name" >Alexis Welington, Stylist</p>
                </section>
            </section>
        </section>
    );
};

export default Testimonials;