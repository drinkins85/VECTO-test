import React from 'react';
import Button from '../Button/Button';

import './MainVideo.css';

const MainVideo = (props) => {
    const { title, coverImage, titleImage, releaseYear, mpaRating, category, duration, description } = props;

    return (
        <div className={'MainVideo'} style={{ backgroundImage: coverImage ? `url(images/${coverImage})` : ''}}>
            <div className={'MainVideo__content'}>
                <div className={'MainVideo__category'}>{category}</div>
                {titleImage ?
                    <img className={'MainVideo__title-image'} src={`images/${titleImage}`} title={title} alt={title}/>
                    :
                    <div className={'MainVideo__title'}>{title}</div>
                }
                <div className={'MainVideo__params'}>
                    <span>{releaseYear}</span>
                    <span>{mpaRating}</span>
                    <span>{duration}</span>
                </div>
                <div className={'MainVideo__description'}>{description}</div>
                <div className={'MainVideo__actions'}>
                    <Button>Play</Button>
                    <Button color={'primary'}>More Info</Button>
                </div>
            </div>
        </div>
    );
}

export default MainVideo;
