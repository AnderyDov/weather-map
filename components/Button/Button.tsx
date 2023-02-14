import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export function Button({ children, ...props }: ButtonProps): JSX.Element {
    function mov(e) {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
    }

    return (
        <button {...props} className={styles.button} onMouseMove={mov}>
            {children}
        </button>
    );
}
