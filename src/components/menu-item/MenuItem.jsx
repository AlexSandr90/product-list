import React from "react";
import { NavLink } from "react-router-dom";
import classes from './menu-ite.module.scss';

const MenuItem = ({ id, path, children }) => {
    return (
        <li key={ id } className={classes.nav_item}>
            <NavLink
                to={`/${ path }`}
                exact
                activeClassName={classes.active_recipe}
                className={classes.item}
            >
                { children }
            </NavLink>
        </li>
    )
};

export default MenuItem;