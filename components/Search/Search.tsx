import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg';

export function Search({ ...props }: SearchProps): JSX.Element {
    return (
        <div className={styles.wrap}>
            <input
                type='text'
                {...props}
                className={styles.search}
                placeholder='Искать населённый пункт'
            />
            <SearchIcon className={styles.icon} />
        </div>
    );
}
