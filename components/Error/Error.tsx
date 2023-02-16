import styles from './Error.module.css';
import { ErrorProps } from './Error.props';

export function Error({ children, ...props }: ErrorProps): JSX.Element {
    return (
        <div className={styles.error} {...props}>
            {children}
        </div>
    );
}
