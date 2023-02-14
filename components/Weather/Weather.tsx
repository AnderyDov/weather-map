import { WeatherProps } from './Weather.props';
import styles from './Weather.module.css';
import { weatherState } from '../../store/atoms';
import { useRecoilValue } from 'recoil';

export function Weather({ ...props }: WeatherProps): JSX.Element {
    const weather = useRecoilValue(weatherState);

    function isExist(num) {
        if (num !== undefined && num !== 11111111111111) {
            return num;
        }
    }

    return (
        <div {...props} className={styles.weather}>
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
    );
}
