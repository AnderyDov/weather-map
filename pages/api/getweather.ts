import { AxiosError } from 'axios';
import { IGetWeather } from '../../interfaces/IGetWeather';
import axios from 'axios';

async function getWeather(city: string) {
    const token = process.env.WEATHER_TOKEN;
    const { data } = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
            params: {
                q: city,
                appid: token,
                lang: 'ru',
                units: 'metric',
            },
        },
    );
    return data;
}

export default async function handler(req, res) {
    console.log(req.body);
    if (req.body.city && req.body.city !== '') {
        try {
            const weather: IGetWeather = await getWeather(req.body.city.trim());
            res.status(200).json(weather);
        } catch (err: unknown) {
            if (
                err instanceof AxiosError &&
                err.response?.data?.cod === '404'
            ) {
                res.status(404).json({
                    cod: '404',
                    message: 'Такой населённый пункт не найден',
                });
            } else if (
                err instanceof AxiosError &&
                err.response?.data?.cod === 401
            ) {
                res.status(401).json({
                    cod: '401',
                    message: 'Проблемы с сесрвером попробуйте позже',
                });
            } else {
                res.status(408).json({
                    cod: '408',
                    message: 'Что пошло не так попробуйте позже',
                });
            }
        }
    } else {
        console.log('некорректное название населённого пункта');
    }
}
