import { WeatherProps } from './Weather.props';
import styles from './Weather.module.css';
import { cityState, weatherState } from '../../store/atoms';
import { useRecoilValue } from 'recoil';
import Arrow from './arrow.svg';
import Compass from './compass.svg';
import {
    getSunTime,
    getIcon,
    windDirection,
    convertPressure,
} from '../../helpers';
import cn from 'classnames';
import Drop from './drop.svg';
import Wind from './wind.svg';
import Pressure from './pressure.svg';
import SunWay from './sunway.svg';
import { dayLength } from '../../helpers/dayLength';

export function Weather({ ...props }: WeatherProps): JSX.Element {
    const city = useRecoilValue<string>(cityState);
    const weather = useRecoilValue(weatherState);

    const sunrise = getSunTime(weather.sys.sunrise, weather.timezone);
    const sunset = getSunTime(weather.sys.sunset, weather.timezone);
    const lengthDay = dayLength(weather.sys.sunrise, weather.sys.sunset);

    return (
        <div
            {...props}
            className={cn(styles.weather, {
                [styles.show]: city.trim() !== '',
                [styles.hide]: city.trim() === '',
            })}
        >
            <div className={styles.name}>{weather.name}</div>
            <div className={styles.coord}>
                {weather.coord.lat.toFixed(6)}&nbsp;
                {weather.coord.lon.toFixed(6)}
            </div>
            <div className={styles.wrap}>
                <Compass className={styles.compass} />
                <Arrow
                    className={styles.arrow}
                    style={{ rotate: `${weather.wind.deg}deg` }}
                />
            </div>
            <div className={styles.temp}>
                {Math.round(weather.main.temp)}&deg;
            </div>
            <div className={styles.icon}>
                {getIcon(weather.weather[0].icon)}
            </div>
            <div className={styles.description}>
                {weather.weather[0].description}
            </div>
            <div className={styles.feel}>
                ??????????????????&nbsp;??????&nbsp;{Math.round(weather.main.feels_like)}
                &deg;
            </div>
            <div className={styles.speed}>
                <Wind className={styles.icon_min} /> {weather.wind.speed} ??/??,{' '}
                {windDirection(weather.wind.deg)}
            </div>
            <div className={styles.humidity}>
                <Drop className={styles.icon_min} />
                {weather.main.humidity}&nbsp;%
            </div>
            <div className={styles.pressure}>
                <Pressure className={styles.icon_min} />
                {convertPressure(weather.main.pressure)}&nbsp;???? ???? ????
            </div>
            <div className={styles.sunway}>
                <SunWay />
                <div className={styles.sunrise}>{sunrise}</div>
                <div className={styles.lengthday}>{lengthDay}</div>
                <div className={styles.sunset}>{sunset}</div>
            </div>
        </div>
    );
}
