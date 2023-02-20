import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { useMemo } from 'react';
import { Button } from '../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { weatherState, cityState, errorState } from '../store/atoms';
import { Weather, WeekWeather } from '../components';
import { handleFetch } from '../helpers';
import { GeolocationControl, Map } from '@pbe/react-yandex-maps';

function Home() {
    const city = useRecoilValue<string>(cityState);
    const [weather, setWeather] = useRecoilState(weatherState);
    const [, setError] = useRecoilState(errorState);

    const mapState = useMemo(
        () => ({ center: [weather.coord.lat, weather.coord.lon], zoom: 9 }),
        [weather],
    );

    return (
        <>
            <div className={styles.home}>
                <Weather />
                <WeekWeather />
                <Map className={styles.map} state={mapState}>
                    <GeolocationControl options={{ float: 'right' }} />
                </Map>
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
