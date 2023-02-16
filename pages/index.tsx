import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { weatherState, cityState } from '../store/atoms';
import { Weather } from '../components';
import { handleFetch } from '../helpers';

function Home() {
    const city = useRecoilValue<string>(cityState);
    const [, setWeather] = useRecoilState(weatherState);

    return (
        <div className={styles.home}>
            <Weather />
            <Button onClick={() => handleFetch(city, setWeather)}>
                Показать
            </Button>
        </div>
    );
}
export default withLayout(Home);
