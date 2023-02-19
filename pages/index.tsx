import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { weatherState, cityState, errorState } from '../store/atoms';
import { Weather } from '../components';
import { handleFetch } from '../helpers';
import Script from 'next/script';

function Home() {
    const city = useRecoilValue<string>(cityState);
    const [, setWeather] = useRecoilState(weatherState);
    const [, setError] = useRecoilState(errorState);

    return (
        <>
            <Script
                src='https://api-maps.yandex.ru/2.1/?apikey=6d3f12f6-aef9-43a6-a39a-dbe5026d759d&lang=ru_RU'
                type='text/javascript'
            ></Script>
            <div className={styles.home}>
                <Weather />
                <div id='map' className={styles.map}></div>
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
