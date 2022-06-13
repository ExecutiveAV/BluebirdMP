import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import PortfolioImageCard from '../../components/portfolioImageCard/portfolioImageCard.component';

import './portfolio.style.scss';

import { updatePortfolio } from '../../redux/portfolio/portfolio.slice';

const Portfolio = () => {
    let category = useParams().category;
    
    const oddity = useSelector(state => state.portfolio.portfolioIsOdd);
    const picturesSrc = useSelector(state => state.categories);

    let pictures = picturesSrc[category].pictures.map(({ id, src, alt }) => {
        return <PortfolioImageCard key={id} src={src} alt={alt} odd={oddity} />
    })

    const dispatch = useDispatch();

    if (!(pictures.length % 2 === 0)) {
        dispatch(updatePortfolio(true));
    } else {
        dispatch(updatePortfolio(false))
    }

    
    return (
        <section className='portfolio-container'>
            {
                pictures
            }
        </section>
    );
};

export default Portfolio;