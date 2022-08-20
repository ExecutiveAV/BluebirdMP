import React from 'react';
import './header.styles.scss';

const Header = ({ content }) => {
    return (
        <p className='header' >{content}</p>
    );
};

export default Header;