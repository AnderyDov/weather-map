import axios, { AxiosError } from 'axios';
import { IGetWeather } from '../interfaces/IGetWeather';

export async function handleFetch(city: string, setWeather) {
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
