import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from '../Menu/Menu.module.scss';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ));
    };

    return (
        <Tippy
            interactive
            delay = {[0,700]} //It means I want to show immediately and I want to hide after 500ms
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-popper')}>{renderItems()}</Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
