import { WeatherProps } from './Weather.props';
import styles from './Weather.module.css';
import { weatherState } from '../../store/atoms';
import { useRecoilValue } from 'recoil';
import Arrow from './arrow.svg';
import Compass from './compass.svg';
import { getSunTime } from '../../helpers/fomaters';

export function Weather({ ...props }: WeatherProps): JSX.Element {
    const weather = useRecoilValue(weatherState);

    const sunrise = getSunTime(weather.sys.sunrise, weather.timezone);
    const sunset = getSunTime(weather.sys.sunset, weather.timezone);

    function isExist(num) {
        if (num !== undefined && num !== 11111111111111) {
            return num;
        }
    }

    return (
        <div {...props} className={styles.weather}>
            <div>Населённый пунт</div>
            <div>{weather.name}</div>
            <div>Условия</div>
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
            <div>Восход</div>
            <div>{sunrise}</div>
            <div>Закат</div>
            <div>{sunset}</div>
            <div>Скорость ветра</div>
            <div>{isExist(weather.wind.speed)} м/с</div>
            <div>Порывы ветра</div>
            <div>{isExist(weather.wind.gust)} м/с</div>
            <div>Направление ветра</div>
            <div className={styles.wrap}>
                <Compass className={styles.compass} />
                <Arrow
                    className={styles.arrow}
                    style={{ rotate: `${weather.wind.deg}deg` }}
                />
            </div>
        </div>
    );
}
