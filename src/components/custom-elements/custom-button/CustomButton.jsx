import React from 'react';

import classes from './custom-button.module.scss';

const CustomButton = ({ handleClick, buttonClassName, children }) => {

    return (
        <button
            onClick={ handleClick }
            className={ buttonClassName }
        >
            { children }
        </button>
    )
};

export default CustomButton;
