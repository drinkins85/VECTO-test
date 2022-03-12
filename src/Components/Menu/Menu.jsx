import React from 'react';
import UserBadge from '../UserBadge/UserBadge';

import './Menu.css';

const Menu = () => {
    return (
        <div className={'Menu'}>
            <div className={'Menu__profile'}>
                <UserBadge avatar={'avatar.png'} userName={'Daniel'} />
            </div>
            <nav className={'Menu__nav'}>
                <ul className={'Menu__list'}>
                    <li className={'Menu__item Menu__item_type_search'}>
                        <span>Search</span>
                    </li>
                    <li className={'Menu__item Menu__item_type_home Menu__item_active'}>
                        <span>Home</span>
                    </li>
                    <li className={'Menu__item Menu__item_type_tv-shows'}>
                        <span>TV Shows</span>
                    </li>
                    <li className={'Menu__item Menu__item_type_movies'}>
                        <span>Movies</span>
                    </li>
                    <li className={'Menu__item Menu__item_type_genres'}>
                        <span>Genres</span>
                    </li>
                    <li className={'Menu__item Menu__item_type_watch-later'}>
                        <span>Watch Later</span>
                    </li>
                </ul>
            </nav>
            <div className={'Menu__additional'}>
                <nav>
                    <ul>
                        <li className={'Menu__secondary-item'}>Language</li>
                        <li className={'Menu__secondary-item'}>Get help</li>
                        <li className={'Menu__secondary-item'}>Exit</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menu;