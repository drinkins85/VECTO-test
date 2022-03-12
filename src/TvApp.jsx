import React, { useEffect, useState, useMemo } from 'react';
import MainVideo from './Components/MainVideo/MainVideo';
import Menu from './Components/Menu/Menu';
import Trends from './Components/Trends/Trends';
import { minutesToHours } from './helpers';
import { mockData } from './mock/data';

import './TvApp.css';

const MAX_TRENDS_COUNT = 50;

const trendsData = mockData.TendingNow;
const defaultFeatured = mockData.Featured;

const trendsCompareFunction = (a, b) => {
    return new Date(Date.parse(a.Date)) > new Date(Date.parse(b.Date)) ? -1 : 1;
}

const prepareTrendsData = (trends) => {
    if (trends.length > MAX_TRENDS_COUNT) {
        return trends.splice(MAX_TRENDS_COUNT).sort(trendsCompareFunction);
    }

    return trends.sort(trendsCompareFunction);
}

const trendsSorted = prepareTrendsData(trendsData);

const findSelectedTrend = (trends, selectedId) => {
    if (!Array.isArray(trends)) {
        return;
    }
    return trends.find((trend) => trend.Id === selectedId);
}

const sortWithFirstTrend = (trends, firstTrendId) => {

    if (!firstTrendId) {
        return trends;
    }

    const index = trends.findIndex((trend) => trend.Id === firstTrendId);

    if (index === -1) {
        return trends;
    }

    return [trends.splice(index, 1)[0], ...trends];
};

export default function TvApp () {
    const [featuredVideoId, setFeaturedVideoId] = useState(undefined)
    const [trends, setTrends] = useState(trendsSorted);

    const featured =
        useMemo(() => findSelectedTrend(trends, featuredVideoId), [trends, featuredVideoId]) || defaultFeatured;

    const { Title, CoverImage, TitleImage, ReleaseYear, MpaRating, Category, Duration, Description } = featured;

    const handleTrendClick = (id) => {
        setFeaturedVideoId(id);
        window.sessionStorage.setItem('lastSelectedVideo', id);
    }

    useEffect(() => {
        const saved = window.sessionStorage.getItem('lastSelectedVideo')

        if (saved) {
            setTrends(sortWithFirstTrend(trends, saved))
        }

    }, []);

    return (
        <div className={'TvApp'}>
            <div className={'TvApp__menu'}>
                <Menu />
            </div>
            <div className={'TvApp__content'}>
                <div className={'TvApp__main'}>
                    <MainVideo
                        title={Title}
                        coverImage={CoverImage}
                        titleImage={TitleImage}
                        releaseYear={ReleaseYear}
                        mpaRating={MpaRating}
                        category={Category}
                        duration={minutesToHours(Duration)}
                        description={Description}
                    />
                </div>
                <div className={'TvApp__trends'}>
                    <Trends trends={trends} onClick={handleTrendClick} />
                </div>
            </div>
        </div>
    );
};
