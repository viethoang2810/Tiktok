import React from "react";
import {NavLink } from "react-router-dom"
import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import PropTypes from "prop-types"

const cx = classNames.bind(styles);

function MenuItem({title, to, icon}) {
    return ( 
        <NavLink to={to} className={(nav) => cx("menu-item", {active:nav.isActive})}>
            {icon}
            <span className={cx("title")}>{title}</span>
        </NavLink>
     );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
}

export default MenuItem;