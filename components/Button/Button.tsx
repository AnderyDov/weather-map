import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export function Button({ children, ...props }: ButtonProps): JSX.Element {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    );
}
