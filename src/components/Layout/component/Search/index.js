import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import Wrapper from '../../../../components/Popper/Wrapper';
import AccountItem from '../../../AccountItem/index';
import styles from '../../../Layout/component/Search/Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import useDebounce from '../../../../hooks/useDebounce';
import * as request from '../../../../utils/request';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    let inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            try {
                const res = await request.get('users/search', {
                    params: {
                        q: debounced,
                        type: 'less',
                    },
                });
                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debounced]);
    const handleChange = (e) => {
        const valueSearch = e.target.value; //

        if (!valueSearch.startsWith(' ')) {
            setSearchValue(valueSearch);
        }
    };
    return (
        //Using a wrapper <div> or <span> tag around the reference element
        //solves this by creating a new parentNode context.
        <div>
            <Tippy
                appendTo={'parent'}
                visible={searchResult.length > 0 && showResult}
                interactive="true"
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <h3 className={cx('search-title')}>Account</h3>
                            {/* <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem /> */}
                            {searchResult.map((result, index) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search account and videos"
                        spellCheck="false"
                        onFocus={() => setShowResult(true)}
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
