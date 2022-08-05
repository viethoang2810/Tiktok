import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../Button/index';
import React from 'react';

const cx = classNames.bind(styles);

function Avartar({ data }) {
    return (
        <Link to={`/@${data.nickname}`}>
            <div className={cx('wrapper')}>
                <div className={cx('user-wrapper')}>
                    <div className={cx('avatar')}>
                        <img src={data.avatar} className={cx('avt-img')} alt={data.full_name} />
                    </div>
                    <div className={cx('user-info')}>
                        <span className={cx('username')}>{data.full_name}</span>
                        <span className={cx('nickname')}>{data.nickname}</span>
                    </div>
                </div>
                <Button small outline children="Following" className={cx('following')} />
            </div>
        </Link>
    );
}

export default Avartar;
