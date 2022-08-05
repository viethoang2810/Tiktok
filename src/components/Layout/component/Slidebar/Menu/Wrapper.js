import React from "react";
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function Wrapper({ children, title }) {
    return (
        <div className={cx('menu-wrapper')}>
            <span className={cx('wrapper-title')}>{title}</span>
            <div className={cx('wrapper-item')}>{children}</div>
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.array
}

export default Wrapper;
