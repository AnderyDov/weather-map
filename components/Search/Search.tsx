import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg';
import { useRecoilState } from 'recoil';
import { cityState } from '../../store/atoms';

export function Search({ ...props }: SearchProps): JSX.Element {
    const [city, setCity] = useRecoilState<string>(cityState);

    function handleChange(e) {
        setCity(e.target.value);
    }

    return (
        <div className={styles.wrap}>
            <input
                type='text'
                {...props}
                className={styles.search}
                placeholder='Искать населённый пункт'
                value={city}
                onChange={handleChange}
            />
            <SearchIcon className={styles.icon} />
        </div>
    );
}
