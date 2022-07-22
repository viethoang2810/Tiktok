import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '../AccountItem/AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img  className={cx('avatar')} src={"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1658574000&x-signature=fmaPVBJewtvZ8MHqO2R1dPvWYh8%3D"} alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;