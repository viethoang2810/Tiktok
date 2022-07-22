import Button from '../../Button/index';
import classNames from 'classnames/bind';
import styles from '../Menu/Menu.module.scss'


const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')}> {data.title}</Button>;
}

export default MenuItem;
