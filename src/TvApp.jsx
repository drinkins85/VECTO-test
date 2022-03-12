import React from 'react';
import MainVideo from './Components/MainVideo/MainVideo';
import { minutesToHours } from './helpers'

import './TvApp.css';

//         "Title": "The Irishman",
//         "CoverImage": "FeaturedCoverImage.png",
//         "TitleImage": "FeaturedTitleImage.png",
//         "Date": "2021-10-24T12:16:50.894556",
//         "ReleaseYear": "2021",
//         "MpaRating": "18+",
//         "Category": "Movie",
//         "Duration": "6000",
//         "Description": "Info About it"

export default function TvApp () {
    return (
        <div className={'TvApp'}>
            <div className={'TvApp__menu'}>menu</div>
            <div className={'TvApp__content'}>
                <div className={'TvApp__main'}>
                    <MainVideo
                        title={'The Irishman'}
                        coverImage={'FeaturedCoverImage.png'}
                        titleImage={'FeaturedTitleImage.png'}
                        releaseYear={'2021'}
                        mpaRating={'18+'}
                        category={'Movie'}
                        duration={minutesToHours(138)}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    />
                </div>
                <div className={'TvApp__trends'}>
                    trends here
                </div>
            </div>
        </div>
    );
};
