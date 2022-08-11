import React from 'react';

import './portfolioImageCard.styles.scss';

import { Link } from 'react-router-dom';

const PortfolioImageCard = ({ key, src, alt, odd, category, id }) => {
    console.log(id);
    return (
        <Link to={`/photography/portfolio/${category}/${id}`} >
            <img id={id} key={key} src={src} className={`portfolio-image-card ${odd ? "wide" : ""}`} alt={alt} />
        </Link>
    );
};

export default PortfolioImageCard;