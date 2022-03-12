import React from 'react';

import './Button.css';

const Button = (props) => {
    const { color, onClick, disabled, children } = props;

    return (
        <button onClick={onClick} className={`Button Button_${color}`} disabled={disabled}>
            <span>{children}</span>
        </button>
    );
};

export default Button