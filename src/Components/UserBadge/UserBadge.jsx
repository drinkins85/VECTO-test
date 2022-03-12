import React from 'react';

import './UserBadge.css';

const UserBadge = (props) => {
    const { userName, avatar } = props;

    return (
        <div className={'UserBadge'}>
            {avatar && <div className={'UserBadge__avatar'}><img src={`images/${avatar}`}/></div>}
            <div className={'UserBadge__name'}>
                {userName}
            </div>
        </div>
    )
}

export default UserBadge;