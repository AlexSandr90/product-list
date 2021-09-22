import React from 'react';
import classes from './custom-popup.module.scss';

const CustomPopup = ({trigger, setTrigger, children}) => {

    const {
        close_btn,
        custom_popup__form,
        custom_popup__inner
    } = classes;

    return (trigger) ? (
        <div className={custom_popup__form}>
            <div className={custom_popup__inner}>
                <button
                    className={close_btn}
                    onClick={() => setTrigger(false)}
                >
                    &#215;
                </button>
                {children}
            </div>
        </div>
    ) : ''
};

export default CustomPopup;