import React from 'react';
import './fullView.styles.scss';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const FullView = () => {
    
    const picturesSrc = useSelector(state => state.categories);
    let category = useParams().category;
    let image = useParams().image;

    let { name, src, session } = picturesSrc[category].pictures.find(picture => picture.id === image);


    return (
        <section className='fullView' >
            <img src={src} className='fullView__img' />
            <p className='fullView__name' >{name}</p>
            <p className='fullView__session' >{session}</p>
        </section>
    );
};

export default FullView;