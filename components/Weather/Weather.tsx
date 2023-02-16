import { WeatherProps } from './Weather.props';
import styles from './Weather.module.css';
import { cityState, weatherState } from '../../store/atoms';
import { useRecoilValue } from 'recoil';
import Arrow from './arrow.svg';
import Compass from './compass.svg';
import { getSunTime, getIcon, windDirection } from '../../helpers';
import cn from 'classnames';
import Drop from './drop.svg';
import Wind from './wind.svg';
import Pressure from './pressure.svg';

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
            <div className={styles.name}>{weather.name}</div>
            {/* <div className={styles.wrap}>
                <Compass className={styles.compass} />
                <Arrow
                    className={styles.arrow}
                    style={{ rotate: `${weather.wind.deg}deg` }}
                />
            </div> */}
            <div className={styles.temp}>{weather.main.temp}&deg;</div>
            <div className={styles.icon}>
                {getIcon(weather.weather[0].icon)}
            </div>
            <div className={styles.description}>
                {weather.weather[0].description}
            </div>
            <div className={styles.feel}>
                ощущается&nbsp;как&nbsp;{weather.main.feels_like}&deg;
            </div>
            <div className={styles.speed}>
                <Wind className={styles.icon_min} />
                {weather.wind.speed}&nbsp;м/с
            </div>
            <div className={styles.humidity}>
                <Drop className={styles.icon_min} />
                {weather.main.humidity}&nbsp;%
            </div>
            <div className={styles.pressure}>
                <Pressure className={styles.icon_min} />
                {weather.main.pressure}&nbsp;гПа
            </div>
            <div className={styles.sunrise}>Восход&nbsp;{sunrise}</div>
            <div className={styles.sunset}>Закат&nbsp;{sunset}</div>
        </div>
    );
}
