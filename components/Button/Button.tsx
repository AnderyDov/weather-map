import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export function Button({
    className,
    children,
    ...props
}: ButtonProps): JSX.Element {
    function mov(e) {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
    }

    return (
        <button
            {...props}
            className={cn(className, styles.button)}
            onMouseMove={mov}
        >
            {children}
        </button>
    );
}
