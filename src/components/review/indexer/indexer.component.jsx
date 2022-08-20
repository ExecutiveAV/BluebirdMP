import React from 'react';
import './indexer.styles.scss';

const Indexer = ({ prevArrow, nextArrow, jumpTo }) => {
    return (
        <section className='indexer' >
            <section className='indexer__arrow' onClick={prevArrow} >
                &lt;
            </section>
            <section className='indexer__index' >
                <p onClick={(e) => jumpTo(parseInt(e.currentTarget.innerText) - 1)} >1</p>
                <p onClick={(e) => jumpTo(parseInt(e.currentTarget.innerText) - 1)} >2</p>
                <p onClick={(e) => jumpTo(parseInt(e.currentTarget.innerText) - 1)} >3</p>
            </section>
            <section className='indexer__arrow' onClick={nextArrow} >
                &gt;
            </section>
        </section>
    );
};

export default Indexer;