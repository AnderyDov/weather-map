import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { weatherState, cityState, errorState } from '../store/atoms';
import { Weather } from '../components';
import { handleFetch } from '../helpers';
import { Map } from '@pbe/react-yandex-maps';

function Home() {
    const city = useRecoilValue<string>(cityState);
    const [weather, setWeather] = useRecoilState(weatherState);
    const [, setError] = useRecoilState(errorState);

    return (
        <>
            <div className={styles.home}>
                <Weather />
                <Map
                    className={styles.map}
                    defaultState={{ center: [55.75, 37.57], zoom: 5 }}
                />
                <Button
                    className={styles.button}
                    onClick={() => handleFetch(city, setWeather, setError)}
                >
                    Показать
                </Button>
            </div>
        </>
    );
}
export default withLayout(Home);
