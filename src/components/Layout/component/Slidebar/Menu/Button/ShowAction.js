import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Button/ShowAction.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function ShowAction({ data }) {
    const [show, setShow] = useState(false);
    
   
    return (
        <button className={cx('btn-action')} onClick={() => setShow(!show)}>
            {show ? 'Show less' : 'Show more'}
        </button>
    );
}

ShowAction.propTypes = {
    data: PropTypes.array,
};

export default ShowAction;
