import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import { useRecoilState } from 'recoil';
import { cityState, errorState, weatherState } from '../../store/atoms';
import { handleFetch } from '../../helpers';

export function Search({ ...props }: SearchProps): JSX.Element {
    const [city, setCity] = useRecoilState<string>(cityState);
    const [, setWeather] = useRecoilState(weatherState);
    const [, setError] = useRecoilState(errorState);

    function handleChange(e) {
        setCity(e.target.value);
        if (e.target.value === '') {
            setError('');
        }
    }

    function handleFetchEnter(e) {
        if (e.code === 'Enter') {
            handleFetch(city, setWeather, setError);
        }
    }

    return (
        <input
            type='text'
            {...props}
            className={styles.search}
            placeholder='Искать населённый пункт'
            value={city}
            onChange={handleChange}
            onKeyDown={handleFetchEnter}
        />
    );
}
