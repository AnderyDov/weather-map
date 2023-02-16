import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { weatherState, cityState, errorState } from '../store/atoms';
import { Weather } from '../components';
import { handleFetch } from '../helpers';

function Home() {
    const city = useRecoilValue<string>(cityState);
    const [, setWeather] = useRecoilState(weatherState);
    const [, setError] = useRecoilState(errorState);

    return (
        <div className={styles.home}>
            <Weather />
            <Button onClick={() => handleFetch(city, setWeather, setError)}>
                Показать
            </Button>
        </div>
    );
}
export default withLayout(Home);
