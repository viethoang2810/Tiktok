import classNames from 'classnames/bind';
import  Header  from '../DefaultLayout/Header/index';
import  Slidebar  from '../DefaultLayout/Slidebar/index';
import styles from '../../Layout/DefaultLayout/DefaultLayout.module.scss';


const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Slidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
