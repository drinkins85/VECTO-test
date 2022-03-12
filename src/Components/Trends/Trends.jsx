import React, { useRef } from 'react';

import './Trends.css';

const Trends = (props) => {
    const { trends, onClick } = props;

    const ref = useRef();

    const handleWheel = (e) => {
        if (e.deltaY === 0 || !ref.current) {
            return;
        }

        ref.current.scrollTo({
            left: ref.current.scrollLeft + e.deltaY,
        });
    };

    return (
        <div className={'Trends'}>
            <div className={'Trends__title'}>Trending Now</div>
            <div className={'Trends__list'} onWheel={handleWheel} ref={ref}>
                {trends && trends.map((trend) => {
                    const { Id, Title, CoverImage } = trend;

                    return (
                        <div className={'Trends__item'} key={Id} onClick={() => { onClick(Id); }}>
                            {CoverImage && <img
                                className={'Trends__image'}
                                alt={Title}
                                title={Title}
                                src={`images/${CoverImage}`}
                            />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Trends;