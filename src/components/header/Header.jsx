import React, {useState} from "react";
import classes from './header.module.scss';
import MenuItem from "../menu-item";
import {CustomButton, CustomPopup} from "../custom-elements";

const Header = () => {

    const [ popupFlag, setPopupFlag ] = useState(false);

    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <MenuItem
                    key='1'
                    path=''
                >
                    Home
                </MenuItem>

                <MenuItem
                    key='2'
                    path='product-item'
                >
                    Product Item
                </MenuItem>

                <button
                    className='card_btn'
                    onClick={() => setPopupFlag(true)}
                >
                    Добавьте свой товар
                </button>
            </nav>
            <CustomPopup
                trigger={popupFlag}
                setTrigger={setPopupFlag}
            >

                <CustomButton
                    buttonClassName='card_btn'
                    handleClick={() => setPopupFlag(false)}
                >
                    Добавьте свой товар
                </CustomButton>
            </CustomPopup>
        </header>
    )
}

export default Header;