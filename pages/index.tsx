import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { useMemo, useEffect } from 'react';
import { Button } from '../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { weatherState, cityState, errorState } from '../store/atoms';
import { Weather } from '../components';
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
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((position) => {
            setWeather({
                ...weather,
                coord: {
                    lon: position.coords.longitude,
                    lat: position.coords.latitude,
                },
            });
        });
    }, []);
    return (
        <>
            <div className={styles.home}>
                <Weather />
                <Map className={styles.map} state={mapState}>
                    <GeolocationControl options={{ float: 'right' }} />
                </Map>
                <Button
                    className={styles.current}
                    onClick={() => handleFetch(city, setWeather, setError)}
                >
                    Погода сейчас
                </Button>
            </div>
        </>
    );
}
export default withLayout(Home);
