import { WeatherProps } from './Weather.props';
import styles from './Weather.module.css';
import { cityState, weatherState } from '../../store/atoms';
import { useRecoilValue } from 'recoil';
import Arrow from './arrow.svg';
import Compass from './compass.svg';
import { getSunTime } from '../../helpers/getSunTime';
import { getIcon } from '../../helpers/getIcons';
import cn from 'classnames';

export function Weather({ ...props }: WeatherProps): JSX.Element {
    const city = useRecoilValue<string>(cityState);
    const weather = useRecoilValue(weatherState);

    const sunrise = getSunTime(weather.sys.sunrise, weather.timezone);
    const sunset = getSunTime(weather.sys.sunset, weather.timezone);

    return (
        <div
            {...props}
            className={cn(styles.weather, {
                [styles.show]: city.trim() !== '',
                [styles.hide]: city.trim() === '',
            })}
        >
            <div>Населённый пунт</div>
            <div>
                {weather.name}
                {'  '}
                <span className={styles.icon}>
                    {getIcon(weather.weather[0].icon)}
                </span>
            </div>
            <div>Условия</div>
            <div>{weather.weather[0].description}</div>
            <div>Координаты</div>
            <div>
                {weather.coord.lat} {weather.coord.lon}
            </div>
            <div>Температура</div>
            <div>{weather.main.temp} С&deg;</div>
            <div>Ощущается как</div>
            <div>{weather.main.feels_like} С&deg;</div>
            <div>Давление</div>
            <div>{weather.main.pressure} гПа</div>
            <div>Влажность</div>
            <div>{weather.main.humidity} %</div>
            <div>Восход</div>
            <div>{sunrise}</div>
            <div>Закат</div>
            <div>{sunset}</div>
            <div>Скорость ветра</div>
            <div>{weather.wind.speed} м/с</div>
            <div>Порывы ветра</div>
            <div>{weather.wind.gust} м/с</div>
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
