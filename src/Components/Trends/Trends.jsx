import React from 'react';

import './Trends.css';

const Trends = (props) => {
    const { trends, onClick } = props;

    return (
        <div className={'Trends'}>
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
    );
}

export default Trends;