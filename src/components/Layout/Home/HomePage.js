import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import Avartar from './Avatar/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);
function HomePage() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search?q=h');

            setAccounts(res.data.data);
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            {accounts.map((account, index) => (
                <div className={cx('header-wrapper')}>
                    <Avartar key={index} data={account} />
                   
                </div>
            ))}
        </div>
    );
}

export default HomePage;
