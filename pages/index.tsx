import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';
import { IGetWeather } from '../interfaces/IGetWeather';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { weatherState } from '../store/atoms';
import { Weather } from '../components';

function Home() {
    const [, setWeather] = useRecoilState(weatherState);

    async function handleFetch() {
        const { data } = await axios.get<IGetWeather>('/api/getweather');
        setWeather(data);
    }

    return (
        <div className={styles.home}>
            <Weather />
            <Button onClick={handleFetch}>Показать</Button>
        </div>
    );
}
export default withLayout(Home);
