import classNames from "classnames/bind";
import styles from '../Slidebar/Sidebar.module.scss'

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
        );
}

export default Slidebar;