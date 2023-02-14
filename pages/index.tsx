import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';
import { IGetWeather } from '../interfaces/IGetWeather';
import axios, { AxiosError } from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { weatherState, cityState } from '../store/atoms';
import { Weather } from '../components';

function Home() {
    const city = useRecoilValue(cityState);
    const [, setWeather] = useRecoilState(weatherState);

    async function handleFetch() {
        if (city.trim() === '') {
            return;
        }
        try {
            const { data } = await axios.post<IGetWeather>('/api/getweather', {
                city,
            });
            setWeather(data);
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                console.log(err.message);
            } else {
                err;
            }
        }
    }

    return (
        <div className={styles.home}>
            <Weather />
            <Button onClick={handleFetch}>Показать</Button>
        </div>
    );
}
export default withLayout(Home);
