import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '../../../../config/routes';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../../../AccountItem/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from './Menu/Wrapper';
import ShowAction from './Menu/Button/ShowAction';

const cx = classNames.bind(styles);

function Slidebar() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const restApi = async () => {
            const res = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search', {
                params: {
                    q: 'h',
                },
            });

            setAccounts(res.data.data);
        };

        restApi();
    },[]);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.home} icon={<FontAwesomeIcon icon={faHouse} />} />
                <MenuItem title="Following" to={config.following} icon={<FontAwesomeIcon icon={faUserGroup} />} />
                <MenuItem title="Live" to={config.live} icon={<FontAwesomeIcon icon={faVideo} />} />
            </Menu>
            <Wrapper title="Tài khoản được đề xuất">
                {accounts.map(account =>(
                    <AccountItem key={account.id} data={account} />
                ))}
            </Wrapper>
            <ShowAction data={accounts}/>
        </aside>
    );
}

export default Slidebar;
