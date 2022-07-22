import classNames from 'classnames/bind';
import styles from '../Button/Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    primary,
    to,
    href,
    outline,
    small,
    large,
    children,
    onClick,
    text,
    disable,
    rounded,
    leftIcon,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    });
    const props = {
        onClick,
        ...passProps,
    };
    //Remove events listeners when event is occured
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}> 
            <span className={cx('title')}>{children}</span>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        </Comp>
    );
}

export default Button;
