import React from 'react';

import './portfolioImageCard.styles.scss';

const PortfolioImageCard = ({ key, src, alt, odd }) => {
    return (
        <img key={key} src={src} className={`portfolio-image-card ${odd ? "wide" : ""}`} alt={alt} />
    );
};

export default PortfolioImageCard;