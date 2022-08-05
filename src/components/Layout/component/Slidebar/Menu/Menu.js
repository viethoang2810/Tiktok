import React from "react";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Menu({ children}) {
    return ( 
        <nav className={cx('wrapper')}>{children}</nav>
     );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Menu;