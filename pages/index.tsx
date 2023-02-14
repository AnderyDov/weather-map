import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';
import { IGetWeather } from '../interfaces/IGetWeather';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { weatherState } from '../store/atoms';

function Home() {
    const [weather, setWeather] = useRecoilState(weatherState);

    async function handleFetch() {
        const { data } = await axios.get<IGetWeather>('/api/getweather');
        setWeather(data);
    }

    function isExist(num) {
        if (num !== undefined && num !== 11111111111111) {
            return num;
        }
    }

    return (
        <div className={styles.home}>
            <div className={styles.weather}>
                <div>Населённый пунт</div>
                <div>{weather.name}</div>
                <div>Описание</div>
                <div>{weather.weather[0].description}</div>
                <div>Координаты</div>
                <div>
                    {isExist(weather.coord.lat)} {isExist(weather.coord.lon)}
                </div>
                <div>Температура</div>
                <div>{isExist(weather.main.temp)} С&deg;</div>
                <div>Ощущается как</div>
                <div>{isExist(weather.main.feels_like)} С&deg;</div>
                <div>Давление</div>
                <div>{isExist(weather.main.pressure)} гПа</div>
                <div>Влажность</div>
                <div>{isExist(weather.main.humidity)} %</div>
                <div>Скорость ветра</div>
                <div>{isExist(weather.wind.speed)} м/с</div>
                <div>Восход</div>
                <div>{isExist(weather.sys.sunrise)}</div>
                <div>Закат</div>
                <div>{isExist(weather.sys.sunset)}</div>
            </div>
            <Button onClick={handleFetch}>Показать</Button>
        </div>
    );
}
export default withLayout(Home);
