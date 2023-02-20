import styles from './WeekWeather.module.css';
import { WeekWeatherProps } from './WeekWeather.props';
import { Day } from '../Day/Day';

export function WeekWeather({ ...props }: WeekWeatherProps): JSX.Element {
    return (
        <div className={styles.week} {...props}>
            <div className={styles.slider}>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
        </div>
    );
}
