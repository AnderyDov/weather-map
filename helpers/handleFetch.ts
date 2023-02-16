import axios, { AxiosError } from 'axios';
import { IGetWeather } from '../interfaces/IGetWeather';

export async function handleFetch(city: string, setWeather, setError) {
    if (city.trim() === '') {
        return;
    }
    try {
        const { data } = await axios.post<IGetWeather>('/api/getweather', {
            city,
        });

        setWeather(data);
        setError('');
    } catch (err: unknown) {
        if (err instanceof AxiosError) {
            setError(err.response?.data.message);
        } else {
            console.log(err);
        }
    }
}
