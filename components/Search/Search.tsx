import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg';
import { useRecoilState } from 'recoil';
import { cityState, weatherState } from '../../store/atoms';
import { handleFetch } from '../../helpers';

export function Search({ ...props }: SearchProps): JSX.Element {
    const [city, setCity] = useRecoilState<string>(cityState);
    const [, setWeather] = useRecoilState(weatherState);

    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleFetchEnter(e) {
        if (e.code === 'Enter') {
            handleFetch(city, setWeather);
        }
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
                onKeyDown={handleFetchEnter}
            />
            <SearchIcon className={styles.icon} />
        </div>
    );
}
