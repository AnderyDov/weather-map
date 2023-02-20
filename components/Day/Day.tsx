import styles from './Day.module.css';
import { DayProps } from './Day.props';

export function Day({ ...props }: DayProps): JSX.Element {
    return <div {...props} className={styles.day}></div>;
}
